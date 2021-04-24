const Init = require( '../lib/Init' );

class Generator {
    constructor( data ) {
        this.name = data.name
        this.id = data.id
        this.email = data.email
        this.role = data.role
        this.github = data.github
        this.office = data.office
        this.school = data.school
        }
}

module.exports = Generator