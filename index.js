// Welcome
console.log(`\x1b[33m
    Please ensure all information is correct before page BUILD.
    If information is incorrect after page BUILD.
    You will have to start from the beginning.
    \x1b[0m`);


// Variables created to use dependencies.
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// FileSystem path plus filename and function that generates file.
const path_DIR = path.resolve(__dirname, 'dist');
const filename = 'Our_Team.html';
const path_FileName = path.join(path_DIR, filename);
const generateHTML = require('./src/generateHTML');

// Required files to create Objects with different class names.
const Manager = require('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');

// Validate and Filter functions
const requireInput = input => {
    while(input.length === 0){
        console.log(`\n\x1b[41m\x1b[90m Input Required \x1b[0m\x1b[0m\n`);
        return false;
    }
    return true;
};

const verifyID = input => {
    let threeDigitCode = input.length === 3;
    let numeric = /^-?\d+$/.test(input);
    let negative = input <= 0;

    while(!threeDigitCode || !numeric || negative){
        console.log(`\n\x1b[41m\x1b[90m Enter three numbers \x1b[0m\x1b[0m\n`);
        return false;
    }
    return true;
};

const notIDResetValue = input => {
    let threeDigitCode = input.length === 3;
    let numeric = /^-?\d+$/.test(input);
    let negative = input <= 0;

    if(!threeDigitCode || !numeric || negative){
        input = '';
    }
    return input;
};

const emailAddress = input => {
    let includes = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;     // future note: run to function so matching variables reduced
    let trueEmail = includes.test(input);

    while(!trueEmail){
        console.log(`\n\x1b[41m\x1b[90m Enter a true email address \x1b[0m\x1b[0m\n`);
        return false;
    }
    return true;
}

const notAnEmail = input => {
    let includes = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;     // reduce matching
    let trueEmail = includes.test(input);

    if(!trueEmail){
        input = '';
    }
    return input;
}

const numberOFFICE = input => {
    let numeric = /^-?\d+$/.test(input);        //reduce matching
    let negative = input <= 0;

    while(!numeric || negative){
        console.log(`\n\x1b[41m\x1b[90m Enter a number \x1b[0m\x1b[0m\n`);
        return false;
    }
    return true;
};

const isNAN = input => {
    let numeric = /^-?\d+$/.test(input);        //reduce matching
    let negative = input <= 0;

    if(!numeric || negative){
        input = '';
    }
    return input;
}


// Gathered team.
const teamRoster = [];


function startBuilding(){
    inquirer.prompt([
        {
            name: 'start',
            message: 'Are you ready to start building your team?\n',
            type: 'confirm',
        }
    ]).then((input) => {
        if(input.start === false){
            console.log(`\n\x1b[41m\x1b[30m Closing application \x1b[0m\x1b[0m\n`);
            return false;
        }
        let employeeRole = 'Manager';   // Should incorporate more manager roles.
        employeeInfo(employeeRole);
    });
}


function employeeInfo(employeeRole){
    inquirer.prompt([
        {
            name: 'name',
            message: `Enter ${employeeRole}'s name.\n`,
            type: 'input',
            validate: requireInput,
        }
        ,
        {
            name: 'id',
            message: `Enter ${employeeRole}'s three-digit id #.\n`,
            type: 'input',
            validate: verifyID,
            filter: notIDResetValue,

        }
        ,
        {
            name: 'department',
            when: () => employeeRole === 'Engineer',
            message: `Select ${employeeRole}'s department field type.`,
            type: 'list',
            choices: ['Front-End Dept', 'Back-End Dept'],
        }
        ,
        {
            name: 'email',
            message: `Enter ${employeeRole}'s email.\n`,
            type: 'input',
            validate: emailAddress,
            filter: notAnEmail,
        }
        ,
        {
            name: 'officeNumber',
            when: () => employeeRole === 'Manager',
            message: `Enter ${employeeRole}'s office #.\n`,
            type: 'input',
            validate: numberOFFICE,
            filter: isNAN,
        }
        ,
        {
            name: 'gitHub',
            when: () => employeeRole === 'Engineer',
            message: `Enter ${employeeRole}'s gitHub user profile name. (case sensitive)\n`,
            type: 'input',
            validate: requireInput,
        }
        ,
        {
            name: 'school',
            when: () => employeeRole === 'Intern',
            message: `Enter ${employeeRole}'s school colloquial name.\n (for more information visit: \x1b[34mhttps://en.wikipedia.org/wiki/List_of_colloquial_names_for_universities_and_colleges_in_the_United_States\x1b[0m)\n`,
            type: 'input',
            validate: requireInput,
        }
    ]).then(input => {
            let thisEmployeeInfo = Object.values(input);// gather only values input by user
            const thisEmployee = eval(`new ${employeeRole}(...thisEmployeeInfo)`);// label each employee with a class name by role.  (eval() executes a string if value is an expression.)
            teamRoster.push(thisEmployee);
            console.log(`\n\x1b[32m Added Employee to roster\x1b[0m\n`);
            continueADDorBUILD();
    });
}


function continueADDorBUILD(){
    inquirer.prompt([
        {
            name: `select`,
            message: `Would you like to continue building your team?  Please select an option.`,
            type: 'list',
            choices: [`Yes - Add an 'Engineer'`, `Yes - Add an 'Intern'`, `No - Finished Building`],
        }        
    ]).then(input => {
        let employeeRole = input.select;

        switch(employeeRole){       // Switch value depending on selection.
            case `Yes - Add an 'Engineer'`:{
                employeeRole = 'Engineer';
                break;
            }
            case `Yes - Add an 'Intern'`:{
                employeeRole = 'Intern';
                break;
            }
            case `No - Finished Building`:{
                console.log(`\n\x1b[32m BUILDING PAGE \x1b[0m\n`);
                return syncAndOrsaveFS();
            }
        }
        employeeInfo(employeeRole);
    });    
}


// Function to write generated PAGE to file.
function syncAndOrsaveFS(){
    if (!fs.existsSync(path_DIR)) {
        fs.mkdirSync(path_DIR)
    }
    fs.writeFileSync(path_FileName, generateHTML(teamRoster), "utf-8"); // tried opening to localhost but couldn't get css files to recognize.
    console.log(`\x1b[32mFile READY.\x1b[0m
    \x1b[36mTo view file, navigate to directory folder 'dist'.
    File name created, 'Our_Team.html'.\x1b[0m\n`)
    }


startBuilding();


/*  zMaG33z  */