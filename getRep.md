
Initialize a Git repository with git init
Check the status of a repository with git status
Track file changes with git add
Create a commit and apply a commit message with git commit

Git Repository with git init
  mkdir my-git-project
   cd my-git-project
   git init

     it shoul look like : Initialized empty Git repository in /Users/avi/my-git-project/.git/

    a new subfolder .git   has been created.
    if ever you do git init in the wrong directory, you can rm -rf .git to delete the .git folder and all its contents

    create a README.md
       touch README.md
       ls
       git status
       git add  <filename or path>       to keep truck
       git commit -m "...."

       git add . add all the files since the last commit

        two steps of adding and committing our file into a single command:
             git commit -am "Updates README.md"

make a new Git repository out of a directory using  git init
check the status of our repo using   git status
track files that have been changed using the git add <filename or path> command
save (commit) the changes with an explanatory message using git commit -m "A message"

Copy a Repository to Your Local Machine with git clone
    1) Navigate to the React repository (Links to an external site.).

   2) Click the green "Code" button on the right.

   3) Make sure SSH is selected.

   4) Click the copy button.
   5) In the terminal, navigate to where you want to put the repo. Type git clone

   git clone git@github.com:facebook/react.git
      cd react
      git remote   you should see origin

      To prove that the origin name points to the repo we cloned from GitHub, we can run git remote -v (the v flag stands for "verbose"). You should see something like this:

  git remote -v
origin  git@github.com:facebook/react.git (fetch)
origin  git@github.com:facebook/react.git (push)

Create a Remote Repository on GitHub
Go to: github.com/new (Links to an external site.), while logged in to GitHub.

Enter a name for your repository in the "Repository name"
After you create the remote repository, you should see a "Quick setup" box at the top of the page. Make sure the 'SSH' option is selected, then click the copy button next to the repo URL to copy the URL. (We'll use this in the next section.)

Connect the Local Repository to the Remote Repository

To set the remote, type git remote add origin followed by a space, then paste in the URL. 
use   git remote -v  (recall that the -v is for "verbose") to verify that we successfully set our remote:

Send Code to the Remote Repo with git push
git push -u origin main

 ~ cd my-git-project
➜  my-git-project git:(main) ✗ git remote add origin git@github.com:lumicojo/Lumi.git
➜  my-git-project git:(main) ✗ git remote -v
origin	git@github.com:lumicojo/Lumi.git (fetch)
origin	git@github.com:lumicojo/Lumi.git (push)
➜  my-git-project git:(main) ✗ git push -u origin main

To github.com:lumicojo/Lumi.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
➜  my-git-project git:(main) ✗ 

git commit -am "commit message"
 git push

 To review, the process is:

create a local repo and run git init to start tracking it
create a remote repo on GitHub
run git remote add origin your-remote-repository-URL to tie your local repo to the remote repo on GitHub
use git add and git commit to save your changes
use git push to push the changes up to the remote repo
With these few steps, you'll be able to get your project up to GitHub in minutes!


PART 2    
          Build an HTML file
 touch index.html
        <!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>My Personal Website</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <script src="script.js"></script>
  </body>
</html>

git add index.html
 git commit -m "create basic HTML file"
 git push


 Add and Connect a CSS File
   touch style.css
   body {
  background: blue;
}
git add style.css
 git add index.html
 git commit -m "add style.css, connect to index.html"
 git push


Add and Connect a JavaScript File
    touch script.js

const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

git add script.js
 git add index.html
 git commit -m "add script.js, connect to index.html"
 git push


