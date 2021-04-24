const Intern = require( '../lib/Intern' );

test( 'verify intern name is entered', () => {
    const intern = new Intern( 'Bob', 22, 'bob@bob.com' );
    // expect name to be string
    expect( intern.name ).toEqual( expect.any( String ) );
    
    // try name as number
    intern.name = 0
    // expect fail
    expect( intern.name ).toBeFalsy()
})

test( 'verify intern id is number', () => {
    const intern = new Intern( 'Bob', 22, 'bob@bob.com' );
    //expect id to be number
    expect( Number( intern.id ) ).toEqual( expect.any( Number ) );

    // try name as string
    intern.id = 'Billy'
    // expect fail
    expect( Number( intern.id ) ).toBeFalsy();
})

test( 'verify that email address is correct', () => {
    const intern = new Intern( 'Bob', 22, 'bob@bob.com' );

    // check if string
    expect( intern.email ).toEqual( expect.any( String ) );

    // check if email
    expect.stringMatching( intern.email, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    // try email as invalid string
    intern.email = 'not an email address'
    // check if not email
    expect.not.stringMatching( intern.email, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    // ref https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript for email regexp validation
})

test( 'test intern getName()', () => {
    const intern = new Intern( 'Bob', 22, 'bob@bob.com' );

    expect( intern.getName() ).toEqual( 'Bob' )
})

test( 'test intern getId()', () => {
    const intern = new Intern( 'Bob', 22, 'bob@bob.com' );

    expect( intern.getId() ).toEqual( 22 )
})

test( 'test intern getEmail()', () => {
    const intern = new Intern( 'Bob', 22, 'bob@bob.com' );

    expect( intern.getEmail() ).toEqual( 'bob@bob.com' )
})

test( 'test intern getRole()', () => {
    const intern = new Intern( 'Bob', 22, 'bob@bob.com' );

    expect( intern.getRole() ).toEqual( 'Intern' )
})

test( 'test intern getSchool()', () => {
    const intern = new Intern( 'Bob', 22, 'bob@bob.com', 'UofT' );

    expect( intern.getSchool() ).toEqual( 'UofT' )
})