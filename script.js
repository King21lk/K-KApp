window.onload = function() {
  alert("Welcome to K K's Talking Ink!");
  const saved = localStorage.getItem("savedNote");
  if (saved) {
    document.getElementById("note").value = saved;
    document.getElementById("displayed-note").innerText = saved;
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
function clearNote() {
  localStorage.removeItem("savedNote");
  document.getElementById("note").value = "";
  alert("Note cleared!");
}
function startDictation() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Your browser doesn't support speech recognition.");
    return;
  }
function readNote() {
  const note = document.getElementById("note").value;
  if (!note.trim()) {
    alert("No note to read.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(note);
  speechSynthesis.speak(utterance);
}
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById('note').value = transcript;
  };

  recognition.onerror = function(event) {
    alert('Error occurred in recognition: ' + event.error);
  };
}
