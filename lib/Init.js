const inquirer = require( 'inquirer' );
const Manager = require( './Manager' );
const Engineer = require( './Engineer' );
const Intern = require( './Intern' );

class Init {
    
    initInput = function() {
        inquirer
            .prompt( [{
                type: 'text',
                name: 'name',
                message: 'Enter employee name',
                validate: input => { // validate that an input has been entered
                    if( input ) {
                        return true
                    } else {
                        console.log( 'Enter employee name' )
                        return false
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: 'Enter employee ID number',
                validate: input => {
                    if( !input === NaN || input > 0) {
                        return true
                    } else {
                        console.log( 'Enter employee ID number' )
                        return false
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: 'Enter employee email',
            },
            {
                type: 'list',
                name: 'role',
                message: 'Enter employee role',
                choices: [ 'Manager', 'Engineer', 'Intern' ]
            } ])
            .then( data => console.log(data ))
    }
}





module.exports = Init