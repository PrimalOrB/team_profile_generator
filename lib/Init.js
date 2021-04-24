// inquirer import
const inquirer = require( 'inquirer' );
// import of classes
const Manager = require( './Manager' );
const Engineer = require( './Engineer' );
const Intern = require( './Intern' );
// generate new object from entries
const Generator = require( './Generator' )

// holder for generated objects
let employeesArr = []

// init class
class Init {
    // initiate input questions
    initInput = function() {
        inquirer
            .prompt( [{
                type: 'text',
                name: 'name',
                message: 'Enter employee name:',
                validate: input => { // text validate that an input has been entered
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
                message: 'Enter employee ID number:',
                validate: input => { // number greater than zero validate
                    if( !input === NaN || input > 0) {
                        return true
                    } else {
                        console.log( 'Enter employee ID number (number only)' )
                        return false
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: 'Enter employee email:',
                validate: input => { // email regex validate
                    const validRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    if( validRegEx.test( String( input ).toLowerCase() ) ) {
                        return true
                    } else {
                        console.log( 'Enter employee email' )
                        return false
                    }
                }
            },
            {
                type: 'list',
                name: 'role',
                message: 'Enter employee role',
                choices: [ 'Manager', 'Engineer', 'Intern' ]
            },
            {
              type: 'text',
              name: 'github',
              message: 'Enter engineer GitHub profile name:',
              when: ({ role }) => { // conditional question depending on choice from role
                if (role === 'Engineer' ) {
                  return true;
                } else {
                  return false;
                }
              },
              validate: input => { // validate that an input has been entered
                if( input ) {
                    return true
                } else {
                    console.log( 'Enter engineer GitHub profile name' )
                    return false
                }
            }
            },
            {
              type: 'text',
              name: 'office',
              message: 'Enter managers office number:',
              when: ({ role }) => { // conditional question depending on choice from role
                if (role === 'Manager' ) {
                  return true;
                } else {
                  return false;
                }
              },
              validate: input => { // number greater than zero validate
                if( !input === NaN || input > 0) {
                    return true
                } else {
                    console.log( 'Enter managers office number (number only)' )
                    return false
                }
            }
            },
            {
              type: 'text',
              name: 'school',
              message: 'Enter interns school name:',
              when: ({ role }) => { // conditional question depending on choice from role
                if (role === 'Intern' ) {
                  return true;
                } else {
                  return false;
                }
              },
              validate: input => { // text validate that an input has been entered
                if( input ) {
                    return true
                } else {
                    console.log( 'Enter interns school name' )
                    return false
                }
            }
            } ])
            .then( data => {
                // send data to generator
                const employee = new Generator( data )
                employeesArr.push(employee)
                // ask if user wants to enter another employee
                inquirer
                    .prompt( {
                        type: 'confirm',
                        name: 'confirmNew',
                        message: 'Enter another employee?',
                        default: false
                    } )
                    .then( conf => {
                        // if true
                        if( conf.confirmNew === true ) {
                            // initiate new input
                            console.log('================')
                            new Init().initInput()
                            return
                        } else {
                            console.log(employeesArr)
                            return
                        }
                    })
        })
    }

    
}





module.exports = Init