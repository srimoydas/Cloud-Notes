const addBtn = document.getElementById('addBtn');
const main = document.getElementById('main');

// const saveNotes=()=>{
//     const notes = document.querySelectorAll('.note textarea');
//     console.log(notes);
//     let data=[];
//     notes.forEach(function(item){
//         data.push(item.value);
//     })
// }

addBtn.addEventListener('click', function () {
    addNote();
});

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    console.log(data)
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}

const addNote = (text = "") => {

    const notes = document.createElement('div');
    notes.classList.add('note');
    notes.innerHTML = `
    <div >
            <div class="tool">
                <i class="fas fa-save save "></i>
                <i class="fas fa-trash trash"></i>
            </div>
            <textarea placeholder="Add note...">${text}</textarea>
        </div>;
    
    
    `
    notes.querySelector(".trash").addEventListener(
        "click",
        function () {
            notes.remove()
            saveNotes()
        }
    )



    notes.querySelector('.save').addEventListener('click', function () {
        saveNotes()
    })

    // notes.querySelector('note textarea').addEventListener('focusout', function (){
    //     saveNotes()
    // })

    main.appendChild(notes);
    saveNotes();

}

(function () {
    const lsNotes = JSON.parse(localStorage.getItem("notes"));
    if (lsNotes === null) {
        addNote()
    } else {
        lsNotes.forEach(
            (lsNote) => {
                addNote(lsNote)
            }
        )
    }
    
})()