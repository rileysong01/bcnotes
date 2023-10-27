const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know',
      choices: ['javascript','nonsense', 'python']
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication',
      choices: ['text','phone', 'meow']
    },
  ])
  .then((response) => {
  fs.appendFile('log.txt', `${response.name} speaks ${response.choices} and prefers ${response.choices}`, (err) =>
  err ? console.error(err) : console.log('Info logged!'))
  });
