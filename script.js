js
window.onload = function() {
  alert("Welcome to K K's Talking Ink!");
  const saved = localStorage.getItem("savedNote");
  if (saved) {
    document.getElementById("note").value = saved;
  }
};

function saveNote() {
  const note = document.getElementById("note").value;
  if (note.trim()) {
    localStorage.setItem("savedNote", note);
    alert("Note saved: " + note);
  } else {
    alert("Please type a note before saving.");
  }
}
