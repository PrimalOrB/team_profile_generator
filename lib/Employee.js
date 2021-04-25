class Employee {
    constructor( data ) {
        this.name = data.name;
        this.id = data.id;
        this.email = data.email;
    }

    getName = function() {
        return this.name;
    }

    getId = function() {
        return this.id;
    }

    getEmail = function() {
        return this.email;
    }

    getRole = function() {
        return this.role = 'Employee';
    }

}

module.exports = Employee