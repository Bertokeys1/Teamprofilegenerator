const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const inquirer = require("inquirer");
const fs = require("fs")
const employees = []
const managerQuestion = [{
    type: "input",
    message: "What is the Manager name?",
    name: "name"
},
{
    type: "input",
    message: "what is the Manager's ID?",
    name: "ID",
},
{
    type: "input",
    message: "what is the Manager's email address?",
    name: "email",
},
{
    type: "input",
    message: "what is the Manager's office number?",
    name: "officeNumber",
}]

const engineerQuestion = [{
    type: "input",
    message: "what is your name?",
    name: "name",
},
{
    type: "input",
    message: "what is your ID?",
    name: "ID",
},
{
    type: "input",
    message: "what is your email address?",
    name: "email",
},
{
    type: "input",
    message: "what is your github?",
    name: "github",
}]
const interQuestion = [{
    type: "input",
    message: "what is your name?",
    name: "name",
},
{
    type: "input",
    message: "what is your ID?",
    name: "ID",
},
{
    type: "input",
    message: "what is your email?",
    name: "email",
},
{
    type: "input",
    message: "what is your school",
    name: "school",
}]

function managerInfo() {
    inquirer.prompt(managerQuestion).then(response => {
        const manager = new Manager(response.name, response.ID, response.email, response.officeNumber)
        employees.push(manager)
        menu()
    })
}
managerInfo()
function menu() {
    inquirer.prompt({
        type: "list",
        message: "choose the following:",
        name: "choice",
        choices: ["Engineer", "Intern", "Exit"]
    }).then(response => {
        if (response.choice === "Engineer") {
            addEngineer()
        } else if (response.choice === "Intern") {
            addIntern()
        } else {
            //console.log(employees)
            fs.writeFileSync("./dist/index.html", HTMLtemplate(employees))

        }
    })
}

function addIntern() {
    inquirer.prompt(interQuestion).then(response => {
        const intern = new Intern(response.name, response.ID, response.email, response.school)
        employees.push(intern)
        menu()
    })
}

function addEngineer() {
    inquirer.prompt(engineerQuestion).then(response => {
        const engineer = new Engineer(response.name, response.ID, response.email, response.github)
        employees.push(engineer)
        menu()
    })
}

function HTMLtemplate(employee) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<title class="title" id="title">Team-Profile</title>
</head>
<body>
<div class="container-fluid">
    <div class="col-12 jumbotron mb-2 ">
            <h1>Team Generator</h1>
    </div>
<div class="container">
        <div class="row cards d-flex">
        <div class="d-flex col-12 justify-content-center">
${renderTeam(employee)}
        </div>
</div>
    </div>
    </div>
</body>
</html>
    `
}

function renderTeam(team) {
console.log(team)
    function engineerHtml(engineer) {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body background-red">
          <h5 class="card-title"> ${engineer.getName()}</h5>
          <p class="card-text">title: ${engineer.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: ${engineer.getEmail()}</li>
          <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
        </ul>
      </div>
        `
    }

    function internHtml(intern) {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body background-red">
          <h5 class="card-title"> ${intern.getName()}</h5>
          <p class="card-text">title: ${intern.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: ${intern.getEmail()}</li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
      `
    }

    function managerHtml(manager) {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body bg-#dc3545">
          <h5 class="card-title bg-#dc3545"> ${manager.getName()}</h5>
          <p class="card-text">title: ${manager.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: ${manager.getEmail()}</li>
          <li class="list-group-item">Office Number: ${manager.getofficeNumber()}</li>
        </ul>
      </div>`
    }


    const htmlArr = []

    htmlArr.push(team.filter(data => data.getRole() === "Manager").map(manager => managerHtml(manager)))
    htmlArr.push(team.filter(data => data.getRole() === "Engineer").map(engineer => engineerHtml(engineer)).join(''))
    htmlArr.push(team.filter(data => data.getRole() === "Intern").map(intern => internHtml(intern)).join(''))

    return htmlArr.join('')
}

