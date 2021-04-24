// process the collected "meta" data and process via switch to displaty correct logo, and additional data attribute
function processMeta( data ) {
    var role = data.role
    var logo
    var additional

    switch( role ) {
        case 'Manager':
        logo ='fas fa-mug-hot'
        additional = `Office number: ${data.meta}`
        break;
        case 'Engineer':
        logo ='fas fa-glasses'
        additional = `GitHub: <a href="http://github.com/${ data.meta }" target="_blank">${ data.meta }</a>`
        break;
        case 'Intern':
        logo ='fas fa-user-graduate'
        additional = `School: ${data.meta}`
        break;
    }

    var output = {
        logo: logo,
        additional: additional
    }

    return output
}

module.exports = positionLogo