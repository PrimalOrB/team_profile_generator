const Engineer = require( '../lib/Engineer' );

test( 'verify engineer name is entered', () => {
    const engineer = new Engineer( {'name':'Bob', 'id':22, 'email':'bob@bob.com', 'github':'bobHub'} );
    // expect name to be string
    expect( engineer.name ).toEqual( expect.any( String ) );
    
    // try name as number
    engineer.name = 0
    // expect fail
    expect( engineer.name ).toBeFalsy()
})

test( 'verify engineer id is number', () => {
    const engineer = new Engineer( {'name':'Bob', 'id':22, 'email':'bob@bob.com', 'github':'bobHub'} );
    //expect id to be number
    expect( Number( engineer.id ) ).toEqual( expect.any( Number ) );

    // try name as string
    engineer.id = 'Billy'
    // expect fail
    expect( Number( engineer.id ) ).toBeFalsy();
})

test( 'verify that email address is correct', () => {
    const engineer = new Engineer( {'name':'Bob', 'id':22, 'email':'bob@bob.com', 'github':'bobHub'} );

    // check if string
    expect( engineer.email ).toEqual( expect.any( String ) );

    // check if email
    expect.stringMatching( engineer.email, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    // try email as invalid string
    engineer.email = 'not an email address'
    // check if not email
    expect.not.stringMatching( engineer.email, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    // ref https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript for email regexp validation
})

test( 'test engineer getName()', () => {
    const engineer = new Engineer( {'name':'Bob', 'id':22, 'email':'bob@bob.com', 'github':'bobHub'} );

    expect( engineer.getName() ).toEqual( 'Bob' )
})

test( 'test engineer getId()', () => {
    const engineer = new Engineer( {'name':'Bob', 'id':22, 'email':'bob@bob.com', 'github':'bobHub'} );

    expect( engineer.getId() ).toEqual( 22 )
})

test( 'test engineer getEmail()', () => {
    const engineer = new Engineer( {'name':'Bob', 'id':22, 'email':'bob@bob.com', 'github':'bobHub'} );

    expect( engineer.getEmail() ).toEqual( 'bob@bob.com' )
})

test( 'test engineer getRole()', () => {
    const engineer = new Engineer( {'name':'Bob', 'id':22, 'email':'bob@bob.com', 'github':'bobHub'} );

    expect( engineer.getRole() ).toEqual( 'Engineer' )
})

test( 'test engineer getGitHub()', () => {
    const engineer = new Engineer( {'name':'Bob', 'id':22, 'email':'bob@bob.com', 'meta':'bobHub'} );

    expect( engineer.getGitHub() ).toEqual( 'bobHub' )
})

test( 'test engineer generateString()', () => {
    const engineer = new Engineer( {'name':'Bob', 'id':22, 'email':'bob@bob.com', 'meta':'bobHub'} );

    expect( engineer.generateString() ).toEqual( expect.stringContaining( engineer.logo ) );
    expect( engineer.generateString() ).toEqual( expect.stringContaining( engineer.name ) );
    expect( engineer.generateString() ).toEqual( expect.stringContaining( `</span><span class="line-content">${ engineer.id }</span>` ) );
    expect( engineer.generateString() ).toEqual( expect.stringContaining( engineer.email ) );
    expect( engineer.generateString() ).toEqual( expect.stringContaining( engineer.role ) );
    expect( engineer.generateString() ).toEqual( expect.stringContaining( `http://github.com/${engineer.github}` ) );
})