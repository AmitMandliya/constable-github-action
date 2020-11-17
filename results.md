## Project 3

### Methods

Our project is based on [Constable GitHub Action](https://github.com/MeghanaVasist/constable-github-action) which grades a repository for its contributability.
For the experiment, we first asked 10 lab rats to manually evaluate 7 different repositories and grade them based on their contributability. We did this to understand how a potential contributor looks at a repository before deciding whether they would like to hop onto the project or not. After that, we tried to understand the factors they took into consideration while rating the repositories for their contributability. Also, we asked them to assign weights to each of the factors. This helped us understand the reasons for the allotted grades.

The next step in our process was to introduce them to Constable. We asked them to play with it by evaluating some of the previously examined repositories using Constable. We followed that by requesting a review about their user experience. We asked them questions like how they would determine the contributability of the project and if they would like to make additions or reductions to the factors involved in grading GitHub repositories.

With the help of this process, we were able to understand two things:
  1. What do people usually look for in a repository when they want to contribute towards it?
  2. Did Constable GitHub Action meet the expectations of the crowd?

After getting the responses, we performed analysis on them and derived meaningful insights.
  
### Materials

List of repositories which we used for experiment:
1. [fall2019-cs-gy-6063-team-one](https://github.com/gcivil-nyu-org/fall2019-cs-gy-6063-team-one)
2. [google-api-php-client](https://github.com/googleapis/google-api-php-client)
3. [shardingsphere](https://github.com/apache/shardingsphere)
4. [engsoccerdata](https://github.com/jalapic/engsoccerdata)
5. [servo](https://github.com/servo/servo)
6. [public-apis](https://github.com/public-apis/public-apis)
7. [the-art-of-command-line](https://github.com/jlevy/the-art-of-command-line)

Link to Constable application: [https://5f9835f7f284f1a827a9681c--jovial-bose-1694a3.netlify.app/](https://5f9835f7f284f1a827a9681c--jovial-bose-1694a3.netlify.app/)
  
Google Forms:
Form to obtain results of manual evaluation of repositories: [https://forms.gle/4BEhHcfapJLr1gqS9](https://forms.gle/4BEhHcfapJLr1gqS9)
Form to obtain subject's feedback on Constable: [https://forms.gle/FGcxVqDBrw5eidfHA](https://forms.gle/FGcxVqDBrw5eidfHA)

  
### Observations

* We perused through the comments we received for each repository and picked the positives and negatives in the comments.
  * Repo 1: </br>
      Positives: Template for Issues </br>
      Negatives: No CONTRIBUTING.md, CODE_OF_CONDUCT.d, README is not very clear, No great explanation of code, lacks clear documentation </br>
    
  * Repo 2: </br>
      Positives: README.md, CONTRIBUTING.md is good, Step-by-step info on how to use the system is provided </br>
      Negatives: Missing Badges, Code Coverage, Travis, Not many open issues, Single user has lot of commits </br>
   
  * Repo 3: </br>
      Positives: Almost perfect repo, Fantastic Documentation, all necessary files are present, great visualizations and diagrams, many badges </br>
      Negatives: No requirements.txt </br>
   
  * Repo 4: </br>
      Positives: README.md is well bifurcated into sections </br>
      Negatives: Missing CONTRIBUTING.md, requirements.txt, CODE_OF_CONDUCT.md, License, Filenames not consistent, issues not descriptive enough
               Travis, Badges, Code Coverage are missing </br>
         
  * Repo 5: </br>
      Positives: Great README, contains badges, fairly active repo, number of contributors is high, highly contributable, issues are very descriptive </br>
      Negatives: Lots of open issues, no CODE_OF_CONDUCT.md, requirements.txt </br>
    
  * Repo 6:  </br>
      Positives: Average documentation, contains Badges, Travis </br>
      Negatives: Unstructured code, many PRs, License, CODE_OF_CONDUCT.md are missing, not clear what is expected from contributors </br>
    
  * Repo 7: </br>
      Positives: Helpful Project </br>
      Negatives: Missing license, badges, travis, code coverage, CODE_OF_CONDUCT.md, can't get much clarity, equal no of open and close issues </br>
      
  From the above responses, we derived few points:
    * All the subjects looked for excellent documentation and presence of LICENSE, CODE_OF_CONDUCT.md, CONTRIBUTING.md, requirements.txt, travis.
    * Along with presence of these files, the subjects also looked into the contents of the files.
    * Badges do have a great impact on outlook of the repository.
    * Code Coverage was one of the important factors which the subjects looked for and that Constable GitHub Action is not tracking.
    * Subjects looked into the description of issues and pull requests. Presence of templates for issues was appreciated. 
    * High number of contributors does attract more contributors.
    * With all the tangible attributes of a repository like files, images, documentation, the subjects also looked through what was the main idea behind the project. This factor adds lot of subjectivity to contributability of the repository.
    * Visualizations and diagrams made better documentation.
    
  These points help us to collect recommendations for Constable 2.0.
    
* Comparisons between mode of grades assigned by subjects vs. grade assigned by Constable for all the repositories.
                        ![abc](https://github.com/AmitMandliya/constable-github-action/blob/main/images/gradesComparison.png) 
  
  The grades the labrats gave were usually very different from the grade assigned by Constable. This was mainly because of the fact that the labrats and Constable deemed different factors as essential to realize the contributability of a repository. When they looked at a repository, they went through the documentation and purpose of the project. Constable, on the other hand, graded repositories more objectively.
                        
* Histogram of answers to the question: **In a single word, what is the single most important factor you look for in a repository to judge its contributability?** </br>
  
  ![abc](https://github.com/AmitMandliya/constable-github-action/blob/main/images/singleFactorHist.png) 

  The most important factors they considered for contributability were documentation, explanation etc. This shows that the presence of contribution and readme files were not enough. Contributors require these files to have enough information such that the purpose and requirements are well understood.

* Histogram of answers to the question: **What other factors apart from the ones listed Constable do you think are significant while judging the contributability of a GitHub repository?** </br>
  
  ![abc](https://github.com/AmitMandliya/constable-github-action/blob/main/images/sigFactorsOTConstable2.png) 

  We observed that most lab rats listed factors which help in understanding the repository. They used these factors to judge how often the repository is used, how regularly it is updated, how recently some changes were made, whether the contributors were coordinating in any way, if the code was well explained and understood, if the repository could be set up with ease, etc. These factors seemed to be the most significant factors.
  
* Here are the **top 5 factors which can make Constable better**:
  ![abc](https://github.com/AmitMandliya/constable-github-action/blob/main/images/topFactorsToMakeBetter.png) 
  
  We also asked users what can improve Constable and many of them mentioned the same factors. They believed that including code coverage, style checkers and a few more would help them understand the repositories and their structures better.
  
* Here are the **top 5 factors which are not considered important** while judging a repository:
  ![abc](https://github.com/AmitMandliya/constable-github-action/blob/main/images/topFactorsNotImportant.png) 
  
  
### Analysis

* We asked our subjects to rate importance of each factor that is currently tracked by Constable on a scale of 1 to 5. We then normalized the scores of each subject and finally plotted the value on a scale of 1 to 10. Doing this helped us to compare the weights which Constable is currently using with the weights assigned by the subjects.

  Here is a comparison of weights assigned by Constable and the mean of weights assigned by the subjects:

  | Attribute               | Weight Assigned by Constable | Mean of Weights Assigned by Subjects |
  |-------------------------|------------------------------|--------------------------------------|
  | README.md               | 2                            | 1.6                                  |
  | CONTRIBUTING.md         | 1                            | 1.2                                  |
  | CODE_OF_CONDUCT.md      | 0.5                          | 1                                    |
  | License                 | 1                            | 1.3                                  |
  | Citation                | 0.5                          | 1.1                                  |
  | .gitignore              | 1                            | 1.3                                  |
  | Avg. PR Closing Time    | 2                            | 1.1                                  |
  | Avg. Issue Closing Time | 2                            | 1.1                                  |


<Place holder>
  
### Conclusions
  After conducting 10 experiments on 7 different repositories, we gathered qualitative and quantative feedback. We are thankful to all of our subjects for that. By going through the feeback we received and the observations to took, we conclude that Constable Github Action is currently performing well but not the best. However, it can be definitely improved into a better application. From the readings of our experiment, we are laying out certain suggestions for design of Constable 2.0 
  
### Design for Constable 2.0
  1. Consider code coverage of the repository.
  2. Check for a balanced text:graph ratio.
  3. Factors like Style Checkers, Code Formatters, Automated Analysis tools and setup.sh should be tracked.
  4. Along with presence of files, content of the files is also important. Therefore, it should have a mechanism to rate content in the files.
  5. Weights of the files tracked by Constable currently need to be readjusted.
  6. Number of PR, Issues and average closing times are important. But description of issues and PRs are equally important if not less.
  7. Take in account the present badges on the repository for the grade calculation.
  8. Existence of an active chat channel is really helpful.

  
### Threats to Validity
* The user is not well acquainted with open source contributions and so could not accurately assess the importance of each file.
* Qualitative factors like well-written code, easy of understanding are not taken into consideration by the user given the time limit. 
* The insufficent no of observations for deduce a conclusion.
* Not all lab rats have extensive experience in software development to accurately evaluate other open source projects.

