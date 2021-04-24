const Employee = require( '../lib/Employee' );

// jest.mock( '../lib/Employee' );

test( 'verify employee name is entered', () => {
    const employee = new Employee( 'Bob', 22, 'bob@bob.com' );
    // expect name to be string
    expect( employee.name ).toEqual( expect.any( String ) );
    
    // try name as number
    employee.name = 0
    // expect fail
    expect( employee.name ).toBeFalsy()
})

test( 'verify employee id is number', () => {
    const employee = new Employee( 'Bob', 22, 'bob@bob.com' );
    //expect id to be number
    expect( Number( employee.id ) ).toEqual( expect.any( Number ) );

    // try name as string
    employee.id = 'Billy'
    // expect fail
    expect( Number( employee.id ) ).toBeFalsy();
})

test( 'verify that email address is correct', () => {
    const employee = new Employee( 'Bob', 22, 'bob@bob.com' );

    // check if string
    expect( employee.email ).toEqual( expect.any( String ) );

    // check if email
    expect.stringMatching( employee.email, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    // try email as invalid string
    employee.email = 'not an email address'
    // check if not email
    expect.not.stringMatching( employee.email, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    // ref https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript for email regexp validation
})

test( 'test employee getName()', () => {
    const employee = new Employee( 'Bob', 22, 'bob@bob.com' );

    expect( employee.getName() ).toEqual( 'Bob' )
})

test( 'test employee getId()', () => {
    const employee = new Employee( 'Bob', 22, 'bob@bob.com' );

    expect( employee.getId() ).toEqual( 22 )
})

test( 'test employee getEmail()', () => {
    const employee = new Employee( 'Bob', 22, 'bob@bob.com' );

    expect( employee.getEmail() ).toEqual( 'bob@bob.com' )
})

test( 'test employee getEmail()', () => {
    const employee = new Employee( 'Bob', 22, 'bob@bob.com' );

    expect( employee.getRole() ).toEqual( 'Employee' )
})