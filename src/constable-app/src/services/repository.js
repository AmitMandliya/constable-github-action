import { request } from "@octokit/request";


const time = (timestamp1, timestamp2) => {
  let difference = Date.parse(timestamp1) - Date.parse(timestamp2);
  let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  return daysDifference;
}

const calculateGrade = (score) => {
  let grade = 'F';
  if (score >= 95) {
    grade = 'A+';
  }
  if (score >= 90 && score <= 94) {
    grade = 'A';
  }
  if (score >= 85 && score <= 89) {
    grade = 'B+';
  }
  if (score >= 80 && score <= 84) {
    grade = 'B';
  }
  if (score >= 75 && score <= 79) {
    grade = 'C+';
  }
  if (score >= 70 && score <= 74) {
    grade = 'C';
  }
  if (score >= 65 && score <= 69) {
    grade = 'D+';
  }
  if (score >= 60 && score <= 64) {
    grade = 'D';
  }
  return grade;
}

const getRepositoryDetails = async (owner, repository) => {
  let score = 0;
  let gradeData = {};
  let gradeDataList = [];
  let mergePullRequestCount = 0;

  const repo_data = await request('GET /repos/{owner}/{repo}', {
    owner: owner,
    repo: repository
  });
  const repoMetaData = {
    name: repo_data.data['full_name'],
    url: repo_data['git_url']
  };

  const add_del = await request('GET /repos/:owner/:repo/stats/code_frequency', {
    owner: owner,
    repo: repository
  });
  const additionDeletionData = add_del.data;

  const contributors = await request('GET /repos/:owner/:repo/stats/contributors', {
    owner: owner,
    repo: repository
  });

  const commit_activity = await request('GET /repos/:owner/:repo/stats/commit_activity', {
    owner: owner,
    repo: repository
  });
  const commitActivityData = commit_activity.data;

  const pull_req = await request('GET /repos/:owner/:repo/pulls', {
    owner: owner,
    repo: repository
  });

  const pull_closed = await request('GET /repos/:owner/:repo/pulls?state=closed', {
    owner: owner,
    repo: repository
  });

  const closed_issue = await request('GET /repos/:owner/:repo/issues?state=closed', {
    owner: owner,
    repo: repository
  });

  const open_issue = await request('GET /repos/:owner/:repo/issues', {
    owner: owner,
    repo: repository
  });

  let averageIssue = 0
  closed_issue.data.forEach(element => {
    averageIssue += time(element.closed_at, element.created_at)
  });

  averageIssue = averageIssue / (closed_issue.data.length + open_issue.data.length - pull_req.data.length)

  const result = await request('GET /repos/{owner}/{repo}/contents', {
    owner: owner,
    repo: repository
  })

  const files = new Set();
  const reqFiles = new Set(['README.md', 'CONTRIBUTING.md', 'CODE_OF_CONDUCT.md', 'LICENSE', 'CITATION.md', '.gitignore'])

  for (let i = 0; i < result.data.length; i++) {
    files.add(result.data[i].name)
  }

  reqFiles.forEach(file => {
    gradeData[file] = { name: file, weight: 1, score: 0 }
  });

  reqFiles.forEach(file => {
    if (files.has(file)) {
      gradeData[file]['score'] = 1
    }
    else {
      gradeData[file]['score'] = 0
    }
  });

  var PR = 0
  pull_closed.data.forEach(pullRequest => {
    if (pullRequest.merged_at) {
      PR += time(pullRequest.merged_at, pullRequest.created_at)
      mergePullRequestCount += 1
    }
  });
  PR = PR / (pull_req.data.length + pull_closed.data.length)

  gradeData = { ...gradeData, "Average PR Closing Time": { name: "Average PR Closing Time", weight: 2, score: (Math.round(PR) < 10 && Math.round(PR) > 0) ? 2 : 0 } }
  gradeData = { ...gradeData, "Average Issue Closing time": { name: "Average Issue Closing time", weight: 2, score: (averageIssue < 10 && averageIssue > 0) ? 2 : 0 } }

  Object.keys(gradeData).forEach((key) => {
    score += gradeData[key]['score'];
    gradeDataList.push(gradeData[key])
  })

  const gradedScore = calculateGrade(score * 10);
  const totalPullRequestCount = pull_req.data.length + mergePullRequestCount;
  const openPRCount = (pull_req.data.length / totalPullRequestCount) * 100;
  const mergePRCount = (mergePullRequestCount / totalPullRequestCount) * 100;
  const totalIssueCount = closed_issue.data.length + open_issue.data.length - pull_req.data.length - pull_closed.data.length;
  const closedIssueCount = ((closed_issue.data.length - pull_closed.data.length) / totalIssueCount) * 100;
  const openIssueCount = ((open_issue.data.length - pull_req.data.length) / totalIssueCount) * 100


  // console.log("Forks", repo_data.data["forks"])
  // console.log("Stars", repo_data.data["stargazers_count"])
  // console.log("Has Wiki", repo_data.data["has_wiki"])
  // console.log("Has Project", repo_data.data["has_projects"])
  // console.log("Additions and Deletions", add_del.data)
  // console.log("Contributors", contributors.data)
  // console.log("Commit Activity", commitActivityData)
  // console.log("Table", gradeDataList)
  // console.log("Assigned grade is ", calculateGrade(score * 10))

  return {
    repoMetaData, gradeDataList, gradedScore, commitActivityData, additionDeletionData, cardData: {
      starCount: repo_data.data["stargazers_count"],
      forkCount: repo_data.data["forks"],
      contributorCount: contributors.data.length,
      releaseCount: 3
    }, pulseData: {
      openPRCount: openPRCount,
      mergedPRCount: mergePRCount,
      totalPRCount: totalPullRequestCount,
      closedIssueCount: closedIssueCount,
      openIssueCount: openIssueCount,
      totalIssueCount: totalIssueCount
    },
  };

}

export default getRepositoryDetails;