let codeString = `
  class Task {
  \t  constructor(text, toggle) {
  \t    this.text = text
      this.toggle =toggle
    }

    display(){
      //Create an ELEMENT
      let listItem = document.createElement('li')
      listItem.appendChild(document.createTextNode(this.text))
      if (this.toggle == true) {
        listItem.classList.add('completed')
      }
      //Make a 'remove' button, give that text, stick it on the ELEMENT
      let removeBtn = document.createElement('button')
      removeBtn.innerText = 'u2717'
      listItem.appendChild(removeBtn)
      removeBtn.addEventListener('click', (evt) => {
        this.removeItem(listItem)
      })
      //Make a 'done' button, give that text, stick it on the ELEMENT
      let markDoneBtn = document.createElement('button')
      markDoneBtn.innerText = 'u2714'
      listItem.appendChild(markDoneBtn)
      markDoneBtn.addEventListener('click', (evt) => {
        this.markAsDone(listItem)
      })
      // put ELEMENT on HTML page
      document.getElementById('to-do').appendChild(listItem);

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
    document.getElementById('item-to-add').value=''
  }

  // get saved to-dos from local storage, parse them, create a new Task instance for each one
  window.addEventListener('DOMContentLoaded', (evt) => {
    listContainingAllTheToDoItemsToSave = JSON.parse(localStorage.getItem('toDoList'))
    console.log(listContainingAllTheToDoItemsToSave)
    for (let i=0; i<listContainingAllTheToDoItemsToSave.length; i++){
      listItem = new Task(listContainingAllTheToDoItemsToSave[i]['text'], listContainingAllTheToDoItemsToSave[i]['toggle'])
      listItem.display()
    }

  })

  document.getElementById('add').addEventListener('click', function(){
    createNewInstance()
  });

  document.getElementById('item-to-add').addEventListener('keypress', function(e) {
      if (e.keyCode == 13) {
        createNewInstance()
      }
  });

  window.addEventListener('beforeunload', (evt) => {
    window.localStorage.setItem('toDoList', JSON.stringify(listContainingAllTheToDoItemsToSave))
  })`



// function

  function chunkCodeString(start, skip) {
      let str = "Hello world!";
      let chunk = codeString.substr(start, skip);
      console.log(chunk)
      return chunk
  }

// document.addEventListener("keypress", function(e) {
//     if (e.keyCode) {
//       console.log(`hello`)
//       let typing = document.createElement("p")
//       typing.innerText= codeString
//       document.getElementById("typing").appendChild(typing);
//     }
// });

let start = 0
let skip = 5

  // listen for typing
  document.addEventListener("keypress", function(e) {
      if (e.keyCode) {
        // create an element
        // let typing = document.createElement("p")
        // append the element to javascipt
        // document.getElementById("typing").appendChild(typing);
        // switch up the text that gets assigned to interval
        chunk = chunkCodeString(start, skip)
        document.getElementById("typing").innerText += chunk
        start += 5
        console.log(start, skip)
        if (start >3212){
          start = 0
        }
      }
  });


// // listen for typing
// document.addEventListener("keypress", function(e) {
//     if (e.keyCode) {
//       console.log(`hello`)
//       // create an element
//       let typing = document.createElement("p")
//       // append the element to javascipt
//       document.getElementById("typing").appendChild(typing);
//       // switch up the text that gets assigned to interval
//       chunk = chunkCodeString()
//       typing.innerText= chunk
//
//     }
// });
