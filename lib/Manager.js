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
    <div class="card-title manager">
    </div>
    <div class="icon-line"><i class="icon ${ this.logo }"></i></div>
    <div class="card-content">
        <div class="card-sub-content">
            <span class="name">${ this.name }</span>
            <span class="position">${ this.getRole() }</span>
            <div class="line-container"><span class="line-icon"><i class="logo fas fa-hashtag"></i></span><span class="line-content">${ this.id }</span></div>
            <div class="line-container"><span class="line-icon"><i class="logo far fa-envelope"></i></span><span class="line-content"><a href="mailto://${ this.email }" target="_blank">${ this.email }</a></span></div>
            <div class="line-container"><span class="line-icon"><i class="logo fas fa-door-open"></i></span><span class="line-content">Office ${ this.officeNumber }</span></div>
        </div>
    </div>
</li>
`
        }
}


module.exports = Manager