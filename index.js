let inquirer = require('inquirer')
let fs = require('fs')

// const questions = []

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL']
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis']
    }
  ])
  .then(function (data) {
    let filename =
      data.name
        .toLowerCase()
        .split(' ')
        .join('') + '.json'

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {
      if (err) {
        return console.log(err)
      }

      console.log('Success!')
    })
  })

// function writeToFile (fileName, data) {}

// function init () {}

// init()
