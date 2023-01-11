const Employee = require('./employee');

class Engineer extends Employee {
    
    constructor(name, id, department, email, gitHub) {

        super(name, id, email);

        this.department = department;

        this.gitHub = gitHub;

    }

    getDepartment(){
        return this.department;

    }

    getGitHubProfile(){
        return this.gitHub;

    }

    getRole(){
        return 'Engineer';

    }
}

module.exports = Engineer;