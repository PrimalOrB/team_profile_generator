const Employee = require( './Employee' )

class Intern extends Employee{
    constructor ( data ) {
        super( data )
        
        this.school = data.meta
        this.logo = 'fas fa-user-graduate'
    }

    getRole = function() {
        return this.role = 'Intern';
    }

    getSchool = function() {
        return this.school;
    }

    generateString = function() {
        return `
<li class="card">
    <div class="card-title">
        <span class="name">${ this.name }</span>
        <i class="icon fas ${ this.logo }"><span class="position">${ this.getRole() }</span></i>
    </div>
    <div class="card-content">
        <div class="card-sub-content">
            <span>ID: ${ this.id }</span>
            <span>Email: <a href="mailto://${ this.email }" target="_blank">${ this.email }</a></span>
            <span>School: ${ this.school }</span>
        </div>
    </div>
</li>`
        }
}

module.exports = Intern