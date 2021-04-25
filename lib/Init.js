// inquirer import
const inquirer = require( 'inquirer' );
// import classes
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
// generatePage
const generateHTML = require('../src/page-template.js');
// import file system tools
const { writeFile, copyFile } = require('../src/generate-file.js');

// holder for generated objects
let employeesArr = []

// init class
class Init {
    // initiate input questions
    initInput = function( emType ) {
        inquirer
            .prompt( [{
                type: 'text',
                name: 'name',
                message: `Enter ${ emType } name:`,
                validate: input => { // text validate that an input has been entered
                    if( input ) {
                        return true
                    } else {
                        console.log( `Enter ${ emType } name` )
                        return false
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: `Enter ${ emType } id number`,
                validate: input => { // number greater than zero validate
                    if( !input === NaN || input > 0) {
                        return true
                    } else {
                        console.log( `Enter ${ emType } number (number only)` )
                        return false
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: `Enter ${ emType } email:`,
                validate: input => { // email regex validate
                    const validRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    if( validRegEx.test( String( input ).toLowerCase() ) ) {
                        return true
                    } else {
                        console.log( `Enter ${ emType } email` )
                        return false
                    }
                }
            },
            {
              type: 'text',
              name: 'meta',
              message: 'Enter engineer GitHub profile name:',
              when: () => { // conditional question depending on choice from role
                if ( emType === 'Engineer' ) {
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
              name: 'meta',
              message: 'Enter managers office number:',
              when: () => { // conditional question depending on choice from role
                if ( emType == 'Manager' ) {
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
              name: 'meta',
              message: 'Enter interns school name:',
              when: () => { // conditional question depending on choice from role
                if ( emType === 'Intern' ) {
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
                let employee
                // create new object based on type
                switch( emType ){
                    case 'Manager':
                        employee = new Manager( data )
                        break;
                    case 'Engineer':
                        employee = new Engineer( data )
                        break;
                    case 'Intern':
                        employee = new Intern( data )
                        break;
                }
                // push employee to array
                employeesArr.push( employee )
                
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
                            // select type of employee to add
                            inquirer
                                .prompt( {
                                        type: 'list',
                                        name: 'role',
                                        message: 'Enter employee role',
                                        choices: [ 'Engineer', 'Intern' ]
                                    }
                                ).then( data => {
                                    // initiate new input with selected role
                                    new Init().initInput( data.role )
                                })
                            return
                        } else {
                            // send storage array to generations    
                            const output = new Init().generatePage( employeesArr )
                            // write file promise chain
                            writeFile( output ) // write file
                            .then( writeFileResp => {
                            console.log(writeFileResp);
                            return copyFile(); // copy file
                            })
                            .then( copyFileResp => {
                            console.log(copyFileResp);
                            })
                            .catch( err => {
                            console.log( err );
                            });
                        }
                    })
        })
    };

    generatePage( data ) {
        return generateHTML( data )
        
    };
   
};

module.exports = Init