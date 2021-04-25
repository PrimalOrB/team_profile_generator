// parse the input data into a string for to display in the HTML
function parseArr( data ) {
    let post = []
    data.map( x => {
        post.push( x.generateString() )
    })
    return post.join('')
}

module.exports = inputData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profiles</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <h1>My Team</h1>
      </header>

      <main>
        <ul id="card-list">
            ${ parseArr( inputData ) }
        </ul>
      </main>

      <footer>
      </footer>
    </body>
    </html>
    `;
  };
  