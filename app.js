console.log('Starting app.js')

// const fs = require('fs')
// const _ = require('lodash')
const argv = require('yargs').argv
const notes = require('./notes.js')

var command = argv.command
var message
var note

console.log('Command: ', argv.command)

if (command === 'add') {
  note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('ADD NOTE: ')
    notes.logNote(note)
  } else {
    console.log(`ERROR title ${argv.title} already taken`)
  }
} else if (command === 'list') {
  console.log('LIST NOTES')
  notes.getAll()
} else if (command === 'read') {
  note = notes.getNote(argv.title)
  message = note ? notes.logNote(note) : `Note ${argv.title} not found`
  console.log(message)
} else if (command === 'remove') {
  var isRemoved = notes.removeNote(argv.title)
  message = isRemoved ? `Note ${argv.title} removed successfully` : `Note ${argv.title} not found`
  console.log(message)
} else {
  console.log('Command not recognized')
}
