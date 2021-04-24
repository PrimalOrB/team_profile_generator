module.exports = inputData => {
    const manager = inputData.filter(x => x.role == 'Manager') 
    const engineer = inputData.filter(x => x.role == 'Engineer') 
    const intern  = inputData.filter(x => x.role == 'Intern') 

    console.log( manager, engineer, intern)

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
      </header>

      <main>
      </main>

      <footer>
      </footer>
    </body>
    </html>
    `;
  };
  