# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A node.js terminal based application to generate an HTML page displaying a workplace team of a Manager, Engineers, and Interns and their information

## Table Of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation

- Clone the repository to your local machine
- Navigate to the designated folder in bash
- Execute `npm install` to install dependencies
  - [Inquirer](https://www.npmjs.com/package/inquirer) npm package will be installed along with its own dependencies
- To install dev dependencies, execite `npm install --dev`
  - [Jest](https://jestjs.io/) npm package will be installed along with its own dependencies

## Usage

- Run 'node index.js' from the terminal
- Follow prompts to enter all the information for a manage
  - Name
  - ID
  - Email address
  - Office
- You are prompted to add more employeed
- Engineer
  - Name
  - ID
  - Email address
  - GitHub profile
- Intern
  - Name
  - ID
  - Email address
  - School
- Validation is performed on all entries, including ID to ensure it is a unique value
- [Walkthrough video](https://drive.google.com/file/d/1SE1n86cY_G5SgpDftSIhKaz6b_giao7O/view?usp=sharing)

## License

This application is covered under the [MIT](https://opensource.org/licenses/MIT) license.

## Contribution

- This project is not open for contribution

## Tests

- Ensure `npm install --dev` has been run after cloning the repo
- Tests are run using the [Jest](https://jestjs.io/) npm package
- run `npm test` to test all suites, or to test individually:
  - `npm test Employee`
  - `npm test Manager`
  - `npm test Engineer`
  - `npm test Inter`

## Questions

Please feel free to contact me regarding any further questions:

- [GitHub Profile](https://github.com/PrimalOrb)
- [Email Me](mailto://primalorb@gmail.com)
