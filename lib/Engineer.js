const Employee = require( './Employee' )

class Engineer extends Employee{
    constructor ( data ) {
        super( data )
        
        this.github = data.meta
        this.logo = 'fas fa-glasses'
    }

    getRole = function() {
        return this.role = 'Engineer';
    }

    getGitHub = function() {
        return this.github;
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
            <span>GitHub: GitHub: <a href="http://github.com/${ this.github }" target="_blank">${ this.github }</a></span>
        </div>
    </div>
</li>`
        }
}

module.exports = Engineer