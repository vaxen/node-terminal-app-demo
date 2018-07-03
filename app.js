console.log('Starting app.js')

// const fs = require('fs')
// const _ = require('lodash')
const argv = require('yargs').argv
const notes = require('./notes.js')

var command = argv.command
console.log('Command: ', argv.command)
if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body)

  if (note) {
    console.log(`Note Insert  ${note.title}`)
  } else {
    console.log(`ERROR title ${argv.title} already taken`)
  }
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'read') {
  notes.getNote(argv.title)
} else if (command === 'remove') {
  var isRemoved = notes.removeNote(argv.title)
  var message = isRemoved ? `Note ${argv.title} removed successfully` : `Note ${argv.title} not found`
  console.log(message)
} else {
  console.log('Command not recognized')
}
