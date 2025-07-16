js
window.onload = function() {
  alert("Welcome to K K's Talking Ink!");
};

function saveNote() {
  const note = document.getElementById("note").value;
  if (note.trim()) {
    alert("Note saved: " + note);
  } else {
    alert("Please type a note before saving.");
  }
}
