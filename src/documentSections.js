require('./generateHTML');




const documentTop = 
`
<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="UTF-8">
    <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><!--ICONS.  I personally do not like plugins-->
    <link rel="stylesheet" href="./utilities.css">
    <link rel="stylesheet" href="./stylesheet.css">
    <title>Document</title>
</head>
<body>

    <div class="contain-all">

        <header class="team-mission">

            <h1 class="fa-3x">Team Mission</h1>
            <p class="statement">Team mission statement in here to talk about all the things we have accomplished. Why we set out to complete them.  Why we thought it would be a good idea to bring it to anyone who wants to think about what we've done.  Honestly just making some random text to put into the field and lorem episum i have to install and not really wanting to that right now.  Just providing my own text is a little faster.</p>

        </header>
`;
// will need to insert each role icon separately.  remove github from manager and intern.   office number, department, school all same field.
const employeeCard = function (){

`
            <div class="card">

            <div class="circle"></div>

            <h2>REPLACE/NAME</h2>

            <div class="title">
                <h3>REPLACE/ROLE<i class="REPLACE/ICON"></i></h3>
            </div>

            <div class="id">
                <p>Id #: REPLACE/ID</p>
            </div>

            <div class="area">
                <p>OFFICE/DEPT/SCHOOL</p>
            </div>
        
            <ul class="contacts">
                <li class="contact-item">
                    <a class="contact-icon" href="REPLACE/EMAIL"><i class="fa-solid fa fa-envelope"></i></a>
                </li>
                <li class="contact-item">
                    <a class="contact-icon" href="ENGINEER/GITHUB"><i class="fa fa-github"></i></a>
                </li>
            </ul>

            <span class="top">T</span><span class="bottom">M</span>

            <i class="fa fa-regular fa-barcode scan"></i>

            <div class="substitute-IMG">
                <i class="fa fa-solid fa-user mysize"></i>
                <i class=></i>
            </div>

        </div>
    </div>
`;


}


const documentBottom = function (){
`
    <footer>
        <p>Copyright &copy; 2023 by Team Mission.</p>
        <p>All Rights Reserved.</p>
        <i class="fa fa-solid fa-tag contact-icon"></i>
        <p>Team Mission</p>
    </footer>

</body>
</html>
`;


}


module.exports = documentTop, employeeCard, documentBottom;