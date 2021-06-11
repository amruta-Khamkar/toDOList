console.log('Here i am starting my first project')
showNotes();
// If user adds a note ,add it to the localStorage
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', function (e) {
    let addText = document.getElementById('addText')
    let addTitle=document.getElementById('addTitle')
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let myObj={
        text:addText.value,
        title:addTitle.value
    }
    notesObj.push(myObj)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addText.value = "";
    addTitle.value = "";
    console.log(notesObj)
    showNotes();
})
// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="cards">
        <div class="card-part">
            <h3 class='title'>${element.title}</h3>
            <p class='para'>${element.text}</p>
            <button id="${index}" onclick='deleteNode(this.id)' class='button'>Delete Note</button>
            </div>
            </div>`

    });
    let notesElm = document.getElementById('notes')
    if (notesObj.length !== 0) {
        notesElm.innerHTML = html
    }
    else {
        notesElm.innerHTML = `Nothing to Show,Use "Add a Note" section above to add notes`
    }
}

// Function to delete a note
function deleteNode(index) {
    // console.log('i am deleting', index)
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    showNotes();
}

let search=document.getElementById('searchTxt')
search.addEventListener('input' , function(){
    let inputVal=search.value.toLowerCase();
    // console.log('input event fired',inputVal)
    let noteCards=document.getElementsByClassName('cards');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName('p')[0].innerText
        if(cardTxt.includes(inputVal)){
        element.style.display='block'
    }
    else{
        element.style.display='none'

        }
        // console.log(cardTxt)

    })
})

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/ 
