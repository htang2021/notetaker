# Note Taker

## Description
An application that can be used to write, save, and delete notes. This application uses an Express.js backend and saves and retrieves note data from a JSON file that is deployed on Heroku.

## User Story
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete.

## Acceptance Criteria
- GIVEN a note-taking application
- WHEN I open the Note Taker
- THEN I am presented with a landing page with a link to a notes page
- WHEN I click on the link to the notes page
- THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- WHEN I enter a new note title and the note’s text
- THEN a Save icon appears in the navigation at the top of the page
- WHEN I click on the Save icon
- THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
- WHEN I click on an existing note in the list in the left-hand column
- THEN that note appears in the right-hand column
- WHEN I click on the Write icon in the navigation at the top of the page
- THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## Mock-Up
![](./public/assets/images/README-Mockup1.png)
![](./public/assets/images/README-Mockup2.png)

## Github Repository
All files and changes made are located on github at the following location:

https://github.com/htang2021/notetaker

## Application Live URL
https://htang-notetaker.herokuapp.com/

## Deploy Your Project
This instruction below assumes that a project and repo were already created on github and that they are already linked as appropriate.
(https://github.com/htang2021/notetaker).

1. From the local CLI at the root of the project repo, do a git clone or git pull
2. Install the appropriate NPM packages dependencies, $ npm install
3. Verify, or create if needed, that .gitignore include node_modules/, .DS_Store, and package-lock.json entries at the minimum
4. Perform git add, commit, and push as appropriate to baseline the deployment repository
5. Create a Heroku account, if not already, and verify that the heroku repository is visible (or reference the heroku website for more details):  
  
    $ git remote -v  
    heroku  https://git.heroku.com/htang-notetaker.git (fetch)  
    heroku  https://git.heroku.com/htang-notetaker.git (push)  
    origin  git@github.com:htang2021/notetaker.git (fetch)  
    origin  git@github.com:htang2021/notetaker.git (push)

6. Create a deployment instance from CLI, "$ heroku create htang-notetaker" (htang-notetaker is the app name - must be unique on heroku), and check to make sure it's created:  
  
    $ heroku apps  
    === hungtang@hotmail.com Apps  
    htang-notetaker  

7. Git checkout to main, then deploy the code to heroku (build info will display):  
    $ git push heroku main  
    Enumerating objects: 50, done.  
    Counting objects: 100% (50/50), done.  
    Delta compression using up to 8 threads  
    Compressing objects: 100% (38/38), done.  
    Writing objects: 100% (42/42), 77.56 KiB | 3.53 MiB/s, done.  
    Total 42 (delta 18), reused 0 (delta 0), pack-reused 0  
    remote: Compressing source files... done.  
    remote: Building source:  
    remote:  
    remote: -----> Building on the Heroku-20 stack  
    remote: -----> Using buildpack: heroku/nodejs  
    remote: -----> Node.js app detected  
    remote:  
    ....  
    ....  
    remote: -----> Pruning devDependencies  
    remote:        audited 51 packages in 0.784s  
    remote:        found 0 vulnerabilities  
    remote:  
    remote:  
    remote: -----> Build succeeded!  
    remote: -----> Discovering process types  
    remote:        Procfile declares types     -> (none)  
    remote:        Default types for buildpack -> web  
    remote:  
    remote: -----> Compressing...  
    remote:        Done: 32.7M  
    remote: -----> Launching...  
    remote:        Released v4  
    remote:        https://htang-notetaker.herokuapp.com/ deployed to Heroku  
    remote:  
    remote: Verifying deploy... done.  
    To https://git.heroku.com/htang-notetaker.git  
    5515b73..f3d4efa  main -> main  
     
8. Go to the deployed URL shown and verify all is working:  
    https://htang-notetaker.herokuapp.com/  

## Testing
- Validate deployed URL launch at landing page successfully
- Go to notes page and verify the 3 pre-populated notes are listed
- Verify each of the pre-populated notes can be shown on the right side of the page when clicked on
- Check that new note can be saved and it will be added to the list to the left side of the page
- Try deleting any of the notes entry and verify that the right one is deleted
- Refresh the page to ensure notes persist, even through page reloads and from closing and opening a new browser session
- Verify all links works as expected

## Questions
Feel free to reach out to [me](mailto:hungtang@hotmail.com).

End of README.md - updated by Hung Tang on 4/18/21