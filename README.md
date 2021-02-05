# React Search App
## Student Roster

This app allows the user to view a Student Roster containing detailed information about the student, such as their email address, company, skills, and test scores. Search functions by name and by tag are available at the top of the page to filter students by user input terms. Users can add custom tags to individual students for ease of access.

## How It Was Done

This was built using an API from hatchways fetched with axios for data. The frontend uses React with 1 component (Student.js). The search features were built in app.js using the methods: target.value, match.forEach, and some filtering of arrays. The array is then mapped and rendered using a React key.

### Starting the app
1) Clone this repository using ```git clone https://github.com/churchjg/hatch.git```
2) From the command line, ```cd``` into the submission file directory. And open the project in your text editor of choice. 
2) Install necessary dependencies by running ```npm install``` in the command line.
3) At the root of the submission directory, run the app using ```npm start```.
4) If your browser does not automatically open, please manually open your browser and navigate to ```localhost:3000``` once the command line shows that the project has "compiled successfully".