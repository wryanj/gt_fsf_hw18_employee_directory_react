
# gt_fsf_hw18_employee_directory_react 

## Table of Contents
1. [Description](#Description)
3. [Usage](#Usage)
4. [Installation](#Installation)
5. [Licenses](#Licenses)
6. [Questions](#Questions)
7. [Credits](#Credits)

## Description
**Deployed App (Git Pages)**      
ENTER

**Walkthrough Video With Commentary Hosted on Google Drive**       
https://drive.google.com/file/d/1wzRZTKKSh8pN6EdJXFfJRNebTSxN7II4/view?usp=sharing

**Directory Snapshot**  
Here is the look of the directory, I went with a dark mode theme. For details on search and filter see the deployed app or checkout the demo video.
![directory_snapshot](https://user-images.githubusercontent.com/72420733/116709724-f416e480-a99e-11eb-9c4e-d26b2b6fdae3.PNG)

This assignment asked us to build an employee directory front end using react components and related npm libraries, such as react tables. The assignment is only focused on a front end, no server script is written or provided for this. The result is pretty straight forward. 

Using react components, I have created an employee directory table that can be sorted by any column. There is also a global search function that returns results as searched by the user. 

For data, I utilize the random user API. I make a call to get 100 users for this example within my API.js file (users are also only returned from the U.S). Then on my directory page (where I define a container component) I map through those results, create a new array of objects including only the information I need in the table, and then set it to the state property I defined for results. From there I pass it as a prop down to my EmployeeTable component where I render it within a react table I setup. 

For page styling I utilized bootsrap 5.

For implementing the react tables, I also used their code sandbox provided and really thought this was useful. I will use this tool more often in the future for checking or playing around with code without doing it in my source files on a current branch. 

## Usage
This application can be used to quickly pull data and render it to a table that can be searched and sorted. For the example here I pass it user data, but it could be modified for various purposes. 

## Installation
To install this application you just need to ensure that you have nodeJS and run the npm i command to get required dependencies. The package.json list which ones were utilized.

## Licenses
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)  
https://opensource.org/licenses/MIT

## Questions
Email me at ryanjohnson9685@gmail.com for more information.

## Credits
For this assignment I utilized class notes and recordings, as well as some MDM and W3 schools resources. I also utilized the docs on react, as well as react tables. 
