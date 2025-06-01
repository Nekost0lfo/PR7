
function updateOfflineStatus() {
    const offlineStatus = document.getElementById("offline-status");
    if (navigator.onLine) {
      offlineStatus.classList.add("hidden");
    } else {
      offlineStatus.classList.remove("hidden");
    }
  }
  

  function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const noteList = document.getElementById("note-list");
    noteList.innerHTML = "";
  
    notes.forEach((note, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="note-text">${note}</span>
        <button onclick="deleteNote(${index})">Удалить</button>
      `;
      noteList.appendChild(li);
    });
  }
  

  function addNote() {
    const noteInput = document.getElementById("note-input");
    const noteText = noteInput.value.trim();
    if (noteText) {
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      notes.push(noteText);
      localStorage.setItem("notes", JSON.stringify(notes));
      noteInput.value = "";
      loadNotes();
    }
  }
  

  function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
  }
  

  function toggleNotesVisibility() {
    const noteList = document.getElementById("note-list");
    const button = document.getElementById("toggle-notes-btn");
  
    if (noteList.style.display === "none" || noteList.style.display === "") {
      noteList.style.display = "block"; 
      button.textContent = "Скрыть все заметки"; 
    } else {
      noteList.style.display = "none"; 
      button.textContent = "Показать все заметки"; 
    }
  }
  

  document.getElementById("add-note-btn").addEventListener("click", addNote);
  document.getElementById("toggle-notes-btn").addEventListener("click", toggleNotesVisibility);
  

  loadNotes();
  updateOfflineStatus();
  

  document.getElementById("note-list").style.display = "none";  
  document.getElementById("toggle-notes-btn").textContent = "Показать все заметки"; 