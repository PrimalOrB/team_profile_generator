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
    <div class="card-title intern">
            </div>
        <div class="icon-line"><i class="icon ${ this.logo }"></i></div>
    <div class="card-content">
        <div class="card-sub-content">
            <span class="name">${ this.name }</span>
            <span class="position">${ this.getRole() }</span>
            <div class="line-container"><span class="line-icon"><i class="logo fas fa-hashtag"></i></span><span class="line-content">${ this.id }</span></div>
            <div class="line-container"><span class="line-icon"><i class="logo far fa-envelope"></i></span><span class="line-content"><a href="mailto://${ this.email }" target="_blank">${ this.email }</a></span></div>
            <div class="line-container"><span class="line-icon"><i class="logo fas fa-graduation-cap"></i></span><span class="line-content">${ this.school }</span></div>
        </div>
    </div>
</li>`
        }
}

module.exports = Intern