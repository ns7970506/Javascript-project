const addBtn = document.getElementById("addBtn")
const main = document.getElementById("main")
addBtn.addEventListener("click",()=>{
    addnote();
})

const savenote = () => {
    const notes = document.querySelector(".ri-save-line")
    const data = []
    notes.forEach((note)=>{
        data.push(note.value)
    })
    if(data.length===0){
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
}

const addnote = (text="") => {
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML= `
    <div class="tool">
                 <i class="ri-delete-bin-7-fill"></i>
                 <i class="ri-save-line"></i>
            </div>
            <textarea>${text}</textarea>`;


  const deleteBtn = note.querySelector(".ri-delete-bin-7-fill")
        deleteBtn.addEventListener("click",()=>{
            note.remove()
            savenote()
        });
    const saveBtn = note.querySelector(".ri-save-line")
    saveBtn.addEventListener("click",()=>{
            savenote();
    })
    const textarea = note.querySelector("textarea")
    textarea.addEventListener("focusout",()=>{
        savenote();
    });
    main.appendChild(note)
}