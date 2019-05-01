
function NoteList (){
    this.notes = [];
}

NoteList.prototype.addNote = function(value) {
    let note = new Note(value);
    this.notes.push(note);
};