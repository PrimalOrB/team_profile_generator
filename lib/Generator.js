class Generator {
    constructor( data ) {
        this.name = data.name
        this.id = data.id
        this.email = data.email
        this.role = data.role
        this.meta = data.meta //to hold the additional attribute regardless of input
        }
}

module.exports = Generator