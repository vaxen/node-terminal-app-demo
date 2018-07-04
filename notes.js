console.log('Starting notes.js')

const fs = require('fs')

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (e) {
    console.log(e.message)
    return []
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
  var notes = fetchNotes()
  var note = {
    title,
    body
  }

  var duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

var getAll = () => {
  console.log('Get all notes')
}

var getNote = (title) => {
  var notes = fetchNotes()
  var noteToRead = notes.filter((note) => note.title === title)
  return noteToRead
}

var removeNote = (title) => {
  var notes = fetchNotes()
  var noteToRemove = notes.filter((note) => note.title !== title)
  saveNotes(noteToRemove)
  return notes.length !== noteToRemove.length
}

var logNote = (note) => {
  console.log(JSON.stringify(note))
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
