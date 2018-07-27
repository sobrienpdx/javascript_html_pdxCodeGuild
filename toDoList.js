let listContainingAllTheToDoItemsToSave = []

class Task {
  constructor(text, toggleState) {
    this.text = text
    this.toggleState =toggleState
  }


  display(){
    //Create an ELEMENT
    let listItem = document.createElement("li")
    listItem.appendChild(document.createTextNode(this.text))
    //Make a "done" button, give that text, stick it on the ELEMENT
    let markDoneBtn = document.createElement('button')
    markDoneBtn.innerText = '\u2714'
    listItem.appendChild(markDoneBtn)
    markDoneBtn.addEventListener('click', (evt) => {
      this.markAsDone(listItem)
    })
    //Make a "remove" button, give that text, stick it on the ELEMENT
    let removeBtn = document.createElement('button')
    removeBtn.innerText = '\u2717'
    listItem.appendChild(removeBtn)
    document.getElementById("to-do").appendChild(listItem);
    removeBtn.addEventListener('click', (evt) => {
      this.removeItem(listItem)
    })
}

  keepTrack(){
  listContainingAllTheToDoItemsToSave.push({ text : this.text, toggle : false} )
  }

  markAsDone(listItem){
    //Make the 'done' button click add a class to ELEMENT for CS styling purposes
    listItem.classList.toggle('completed')
    // go into listContainingAllTheToDoItemsToSave, find the matching text, and reverse the state of the toggle
    let objIndex = listContainingAllTheToDoItemsToSave.findIndex((obj => obj.text == this.text))
    listContainingAllTheToDoItemsToSave[objIndex].toggle = !listContainingAllTheToDoItemsToSave[objIndex].toggle
    console.log(listContainingAllTheToDoItemsToSave);
  }

  removeItem(listItem){
    document.getElementById('to-do').removeChild(listItem)
    let objIndex = listContainingAllTheToDoItemsToSave.findIndex((obj => obj.text == this.text))
    listContainingAllTheToDoItemsToSave.splice(objIndex, 1)
    console.log(listContainingAllTheToDoItemsToSave);
  }
}

function createNewInstance(){
  listItem = new Task(document.getElementById('item-to-add').value, false)
  listItem.display()
  listItem.keepTrack()
  console.log(listContainingAllTheToDoItemsToSave)
  document.getElementById("item-to-add").value=""
}

// get saved to-dos from local storage, parse them, create a new Task instance for each one
window.addEventListener('DOMContentLoaded', (evt) => {
  listContainingAllTheToDoItemsToSave = JSON.parse(localStorage.getItem('toDoList'))
  console.log(listContainingAllTheToDoItemsToSave)
  for (let i=0; i<listContainingAllTheToDoItemsToSave.length; i++){
    listItem = new Task(listContainingAllTheToDoItemsToSave[i]["text"], listContainingAllTheToDoItemsToSave[i]["toggle"])
    listItem.display()
  }

})


document.getElementById("add").addEventListener("click", function(){
  createNewInstance()
});

document.getElementById("item-to-add").addEventListener("keypress", function(e) {
    if (e.keyCode == 13) {
      createNewInstance()
    }
});

window.addEventListener('beforeunload', (evt) => {
  window.localStorage.setItem('toDoList', JSON.stringify(listContainingAllTheToDoItemsToSave))
})
