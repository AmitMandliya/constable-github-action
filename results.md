## Project 3

### Methods

Our project is based on [Constable GitHub Action](https://github.com/MeghanaVasist/constable-github-action) which grades a repository for its contributability.
For the experiment, we first asked the lab rats to manually evaluate 7 different repositories and grade them based on their contributability. We did this to understand how a potential contributor looks at a repository before deciding whether they would like to hop onto the project or not. After that, we tried to understand the factors they took into consideration while rating the repositories for their contributability. Also, we asked them to assign weights to each of the factors. This helped us understand the reasons for the allotted grades.

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

* Comparisons between mode of grades assigned by subjects vs. grade assigned by Constable for all the repositories.
                        ![abc](https://github.com/AmitMandliya/constable-github-action/blob/main/images/gradesComparison.png) 
                        
* Word Cloud of answers to the question: **In a single word, what is the single most important factor you look for in a repository to judge its contributability?** </br>
  
  ![abc](https://github.com/AmitMandliya/constable-github-action/blob/main/images/wordCloud1.png) 

* Here are the **top 5 factors which can make Constable better**:
  ![abc](https://github.com/AmitMandliya/constable-github-action/blob/main/images/topFactorsToMakeBetter.png) 
  
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
  
### Conclusion

<Place holder>
  
### Threats to Validity

* The user is not well acquainted with open source contributions and so could not accurately assess the importance of each file
* Qualitative factors like well-written code, easy of understanding are not taken into consideration by the user given the time limit 
* The insufficent no of observations for deduce a conclusion.
* Not all lab rats have extensive experience in software development to accurately evaluate other open source projects  
