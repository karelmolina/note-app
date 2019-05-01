
function NoteList (){
    this.notes = [];
}

NoteList.prototype.addNote = function(Note) {
    this.notes.push(Note);
};