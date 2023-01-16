// pull from documentSections.js
const { documentTop, documentBottom, employeeCard } = require('./documentSections');

// create page.
function generateHTML(teamRoster){
    let createCardforEACH = teamRoster.map(teamMember => employeeCard(teamMember));

    let fullDocument = documentTop;

    let employeeCardSection = createCardforEACH.join('');

    fullDocument += employeeCardSection += documentBottom;

    return fullDocument;
}


module.exports =  generateHTML;


/*  zMaG33z  */