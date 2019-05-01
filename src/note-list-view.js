
function NoteListView (notelist) {
    this.notelist = notelist;
}

NoteListView.prototype.view = function() {
    return  this.notelist.map(function(note){
        return "<li>"+ note.text + "</li>";
    });
};