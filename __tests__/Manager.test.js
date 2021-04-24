const Manager = require( '../lib/Manager' );

test( 'verify manager name is entered', () => {
    const manager = new Manager( 'Bob', 22, 'bob@bob.com' );
    // expect name to be string
    expect( manager.name ).toEqual( expect.any( String ) );
    
    // try name as number
    manager.name = 0
    // expect fail
    expect( manager.name ).toBeFalsy()
})

test( 'verify manager id is number', () => {
    const manager = new Manager( 'Bob', 22, 'bob@bob.com' );
    //expect id to be number
    expect( Number( manager.id ) ).toEqual( expect.any( Number ) );

    // try name as string
    manager.id = 'Billy'
    // expect fail
    expect( Number( manager.id ) ).toBeFalsy();
})

test( 'verify that email address is correct', () => {
    const manager = new Manager( 'Bob', 22, 'bob@bob.com' );

    // check if string
    expect( manager.email ).toEqual( expect.any( String ) );

    // check if email
    expect.stringMatching( manager.email, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    // try email as invalid string
    manager.email = 'not an email address'
    // check if not email
    expect.not.stringMatching( manager.email, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    // ref https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript for email regexp validation
})

test( 'test manager getName()', () => {
    const manager = new Manager( 'Bob', 22, 'bob@bob.com' );

    expect( manager.getName() ).toEqual( 'Bob' )
})

test( 'test manager getId()', () => {
    const manager = new Manager( 'Bob', 22, 'bob@bob.com' );

    expect( manager.getId() ).toEqual( 22 )
})

test( 'test manager getEmail()', () => {
    const manager = new Manager( 'Bob', 22, 'bob@bob.com' );

    expect( manager.getEmail() ).toEqual( 'bob@bob.com' )
})

test( 'test manager getRole()', () => {
    const manager = new Manager( 'Bob', 22, 'bob@bob.com' );

    expect( manager.getRole() ).toEqual( 'Manager' )
})

test( 'test manager office number', () => {
    const manager = new Manager( 'Bob', 22, 'bob@bob.com', 32 );

    expect( manager.officeNumber ).toEqual( expect.any( Number ) );
})