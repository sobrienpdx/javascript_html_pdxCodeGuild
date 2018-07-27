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

// function addItem() {
//     //Create an ELEMENT
//     let itemToAdd = document.createElement("li");
//     //Give the ELEMENT text
//     let text = document.createTextNode(document.getElementById('item-to-add').value);
//     console.log(text)
//     itemToAdd.appendChild(text);
//     //Make a "done" button, give that text, stick it on the ELEMENT
//     markDoneBtn = document.createElement('button')
//     markDoneBtn.innerText = '\u2714'
//     itemToAdd.appendChild(markDoneBtn)
//     //Make the 'done' button click add a class to ELEMENT for CS styling purposes (MAKE THE TOGGLE SETTING IN toDoItems SET ITSELF ACCORDINGLY!!!!)
//     markDoneBtn.addEventListener('click', function(evt){
//       itemToAdd.classList.toggle('completed')
//     })
//     //Make a "remove" button, give that text, stick it on the ELEMENT
//     removeBtn = document.createElement('button')
//     removeBtn.innerText = '\u2717'
//     itemToAdd.appendChild(removeBtn)
//     //Make the 'remove' button click erase ELEMENT (MAKE SURE TO REMOVE THE ELEMENT FROM toDoItems AS WELL!!!!!)
//     removeBtn.addEventListener('click', function(evt){
//       document.getElementById('to-do').removeChild(itemToAdd)
//     })
//     // Add  ELEMENT to the appropriate parent in html
//     document.getElementById("to-do").appendChild(itemToAdd);
//
//     // store the text and "done" button toggle state of the ELEMENT in a list that can be saved in localStorage
//     // toDoItems.push(document.getElementById('item-to-add').value)
//     // console.log(toDoItems)
//
//
//     toDoItems.push( { "text" : document.getElementById('item-to-add').value, "toggle" : "false"} );
//     console.log(toDoItems)
//
// }


document.getElementById("add").addEventListener("click", function(){
  // addItem()

  // button event creates a new instance of Task class
  listItem = new Task(document.getElementById('item-to-add').value, false)
  listItem.display()
  listItem.keepTrack()
  console.log(listContainingAllTheToDoItemsToSave)
  document.getElementById("item-to-add").value=""
});

// document.getElementById("item-to-add").addEventListener("keypress", function(e) {
//     if (e.keyCode == 13) {
//       addItem()
//       document.getElementById("item-to-add").value=""
//     }
// });
