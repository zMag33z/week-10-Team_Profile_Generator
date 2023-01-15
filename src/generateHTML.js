const fs = require('fs');
// const path = require("path");
// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");
const { documentTop, documentBottom, employeeCard } = require('./documentSections');


function generateHTML(ALLroledTeamMembers){
    let createCardforEACH = ALLroledTeamMembers.map(teamMember => employeeCard(teamMember));

    let fullDocument = documentTop;

    let employeeCardSection = createCardforEACH.join('');

    fullDocument += employeeCardSection += documentBottom;

    console.log(fullDocument);

    return fullDocument;
}


module.exports =  generateHTML;


/*  zMaG33z  */