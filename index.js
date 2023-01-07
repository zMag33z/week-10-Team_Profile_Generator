











const managerInformation = [
    {
        name: `name`,
        message: `Enter manager's name.\n`,
        type: 'input',
        validate: input => input,
    }
    ,
    {
        name: `id`,
        message: `Enter manager's id #.\n`,
        type: 'input',
        validate: input => input,
    }
    ,
    {
        name: `email`,
        message: `Enter manager's email.\n`,
        type: 'input',
        validate: input => input,
    }
    ,
    {
        name: `officeNumber`,
        message: `Enter manager's office #.\n`,
        type: 'input',
        validate: input => input,
    }
];

const queryContinue = [
    {
        name: `selection`,
        message: `Would you like to continue building team?  Please select an option.\n`,
        type: 'list',
        choices: [`Yes - Add an 'Engineer'`, `Yes - Add an 'Intern'`, 'No - Finished Building'],
        filter: input => {
            
        }
    }
]