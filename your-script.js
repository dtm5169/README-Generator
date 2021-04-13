var inquirer = require('inquirer');
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            name: 'input_type',
            message: 'What is your name?',
            default: 'Jim'
        },
        {
            type: 'list',
            name: 'list question',
            message: 'What programming language do you like?',
            choices: ['java', 'Javascript', 'C++', 'Python'],
            default: 'Javascript'
        },
        {
            type: 'checkbox',
            name: 'checkbox question',
            message: 'What programming language do you speak?',
            choices: ['java', 'Javascript', 'C++', 'Python'],
            default: 'Javascript'
        },
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
    })
