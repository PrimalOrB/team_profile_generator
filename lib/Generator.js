class Generator {
    constructor( data ) {
        this.name = data.name
        this.id = data.id
        this.email = data.email
        this.role = data.role
        this.meta = data.meta //to hold the additional attribute regardless of input
    }

    generateString = function() {
        return `
<li class="card">
    <div class="card-title">
        <span class="name">${ this.name }</span>
        <i class="icon fas ${ this.meta.logo }"><span class="position">${ this.role }</span></i>
    </div>
    <div class="card-content">
        <div class="card-sub-content">
            <span>ID: ${ this.name }</span>
            <span>Email: <a href="mailto://${ this.email }" target="_blank">${ this.email }</a></span>
            <span>${ this.meta.additional }</span>
        </div>
    </div>
</li>`
}
}

module.exports = Generator