//Welcome
console.log(`\x1b[33m
    Please ensure all information is correct before page BUILD.
    If information is incorrect after page BUILD.
    You will have to start from the beginning.
    \x1b[0m`);

//  Future note: find way to update information.

// Requirements
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');



// Flow through variables.
const team = [];// function to add team in order.



function startBuilding(){
    inquirer.prompt([
        {
            name: 'start',
            message: 'Are you ready to start building your team?\n',
            type: 'confirm',
        }
    ]).then((input) => {
        if(input.start === false){
            console.log(`\n\x1b[41m\x1b[30m Closing application. \x1b[0m\x1b[0m\n`);
            return false;
        }
        let employeeRole = 'Manager';
        employeeInfo(employeeRole);
    });
}


function employeeInfo(employeeRole){
    inquirer.prompt([
        {
            name: 'name',
            message: `Enter ${employeeRole}'s name.\n`,
            type: 'input',
            // validate:
        }
        ,
        {
            name: 'id',
            message: `Enter ${employeeRole}'s id #.\n`,
            type: 'input',
            // validate:
        }
        ,
        {
            name: 'email',
            message: `Enter ${employeeRole}'s email.\n`,
            type: 'input',
            // validate:
        }
        ,
        {
            name: 'officeNumber',
            when: () => employeeRole === 'Manager',
            message: `Enter ${employeeRole}'s office #.\n`,
            type: 'input',
            // validate:
        }
        ,
        {
            name: 'gitHub',
            when: () => employeeRole === 'Engineer',
            message: `Enter ${employeeRole}'s gitHub user profile name. (case sensitive)\n`,
            type: 'input',
            // validate:
        }
        ,
        {
            name: 'school',
            when: () => employeeRole === 'Intern',
            message: `Enter ${employeeRole}'s school name.\n`,
            type: 'input',
            // validate:
        }
    ]).then(input => {
        switch(employeeRole){
            case 'Manager':{
                const manager = new Manager(input.name, input.id, input.email, input.officeNumber);
                team.push(manager);
                break;
            }
            case 'Engineer':{
                const engineer = new Engineer(input.name, input.id, input.email, input.gitHub);
                team.push(engineer);
                break;
            }
            case 'Intern':{
                const intern = new Intern(input.name, input.id, input.email, input.school);
                team.push(intern);
                break;
            }
        }

        console.log(team);

        continueADDorBUILD();
    });
}


function continueADDorBUILD(){
    inquirer.prompt([
        {
            name: `select`,
            message: `Would you like to continue building your team?  Please select an option.\n`,
            type: 'list',
            choices: [`Yes - Add an 'Engineer'`, `Yes - Add an 'Intern'`, 'No - Finished Building'],
        }        
    ]).then(input => {
        switch(input.select){

            case `Yes - Add an 'Engineer'`:{
                input.select = 'Engineer';
                break;
            }
            case `Yes - Add an 'Intern'`:{
                input.select = 'Intern';
                break;
            }
            case 'No - Finished Building':{
                //send off to function;
                break;
            }
        }
        let employeeRole = input.select;
        employeeInfo(employeeRole);


    });    
}


function buildTeamPage(){

}


startBuilding();