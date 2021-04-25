const Employee = require( './Employee' )

class Manager extends Employee{
    constructor ( data ) {
        super( data )
        
        this.officeNumber = data.meta
        this.logo = 'fas fa-mug-hot'
    }

    getRole = function() {
        return this.role = 'Manager';
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
            <span>Office number: ${ this.officeNumber }</span>
        </div>
    </div>
</li>`
        }
}


module.exports = Manager