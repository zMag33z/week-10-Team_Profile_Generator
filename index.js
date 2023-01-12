//Welcome
console.log(`\x1b[33m
    Please ensure all information is correct before page BUILD.
    If information is incorrect after page BUILD.
    You will have to start from the beginning.
    \x1b[0m`);

// Requirements
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');
const generateHTML = require('./src/generateHTML');

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
    let includes = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let trueEmail = includes.test(input);

    while(!trueEmail){
        console.log(`\n\x1b[41m\x1b[90m Enter a true email address \x1b[0m\x1b[0m\n`);
        return false;
    }
    return true;
}

const notAnEmail = input => {
    let includes = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let trueEmail = includes.test(input);

    if(!trueEmail){
        input = '';
    }
    return input;
}

const numberOFFICE = input => {
    let numeric = /^-?\d+$/.test(input);
    let negative = input <= 0;

    while(!numeric || negative){
        console.log(`\n\x1b[41m\x1b[90m Enter a number \x1b[0m\x1b[0m\n`);
        return false;
    }
    return true;
};

const isNAN = input => {
    let numeric = /^-?\d+$/.test(input);
    let negative = input <= 0;

    if(!numeric || negative){
        input = '';
    }
    return input;
}

/* Future note: get rid of array. */
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
            choices: ['Front-End development', 'Back-End development'],
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
            message: `Enter ${employeeRole}'s school colloquial name. (ie: abbreviated initals/name for school.)\n`,
            type: 'input',
            validate: requireInput,
        }
    ]).then(input => {

        // trying to concat strings for all and get rid of switch statement.
        // let information = [];
        // let keys = Object.keys(input);
        // keys.forEach( key => {
        //     let info = `input.${key}`;
        //     information.push(info);
        // });

        //goes with  const manager = new Manager(`${information}`); need to drop strings.
        //prints manager's name: 'input.name,input.id,input.email,input.officeNumber'
        // console.log(information);

        switch(employeeRole){
            case 'Manager':{
                const manager = new Manager(input.name,input.id,input.email,input.officeNumber);
                team.push(manager);
                break;
            }
            case 'Engineer':{
                const engineer = new Engineer(input.name, input.id, input.department, input.email, input.gitHub);
                team.push(engineer);
                break;
            }
            case 'Intern':{
                const intern = new Intern(input.name, input.id, input.email, input.school);
                team.push(intern);
                break;
            }
        }
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
                input.select = 'BUILD';
                break;
            }
        }

        if(input.select == 'BUILD'){
            generateHTML(team);
        }else{
            let employeeRole = input.select;
            employeeInfo(employeeRole);
        }
    });    
}


startBuilding();

/*  zMaG33z  */