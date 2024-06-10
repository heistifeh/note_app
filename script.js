const createBtn = document.querySelector(".btn");
const input = document.querySelector(".input-paragraph");
const savedNotes = document.querySelector(".saved-notes");
const saveBtn = document.querySelector(".save");
const backBtn = document.querySelector(".back");

createBtn.addEventListener("click", () => {
    input.style.display = "block";
    saveBtn.style.display = "block";
    backBtn.style.display = "block";
    savedNotes.style.display = "none";
    input.textContent = "";
});

backBtn.addEventListener("click", () => {
    savedNotes.style.display = "block";
    input.style.display = "none";
    saveBtn.style.display = "none";
    backBtn.style.display = "none";
});

saveBtn.addEventListener("click", () => {
    const savedText = document.createElement("p");
    savedText.className = "saved-text";
    savedText.textContent = input.textContent;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete btn";
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i> delete note';

    savedText.appendChild(deleteBtn);
    savedNotes.appendChild(savedText);
    savedNotes.style.display = "block";
    input.style.display = "none";
    saveBtn.style.display = "none";
    backBtn.style.display = "none";
});

savedNotes.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});
