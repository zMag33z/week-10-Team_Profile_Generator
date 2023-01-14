const fs = require('fs');
const documentTop = require('./documentSections');
const employeeCard = require('./documentSections')



const teamMembers = {
    set add(thisEmployee) {
        if(thisEmployee.getRole() === 'Manager') this.added.push(thisEmployee);
        if(thisEmployee.getRole() === 'Engineer') this.added.splice(1, 0, thisEmployee);
        if(thisEmployee.getRole() === 'Intern') this.added.push(thisEmployee);
    },
    added: []
}

function generateTeamCard(thisEmployee){

    // send off for card processing employeeCard below then push it.


    teamMembers.add = thisEmployee;  // Send this employee to setter above to be added.
    console.log(thisEmployee.getRole());
    console.log(teamMembers.added);

    
    employeeCard()
}



let check = function (){
    let mycheck;
    return mycheck;
}



function generateHTML(){





    
}



module.exports = generateTeamCard;