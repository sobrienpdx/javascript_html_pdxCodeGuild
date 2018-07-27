
class Task {
  constructor(text, toggleState) {
    this.text = text
    this.toggleState =toggleState
  }

  display(){
    let newTask = document.createElement("li")
    newTask.appendChild(document.createTextNode(this.text))
    //Make a "done" button, give that text, stick it on the ELEMENT
    let markDoneBtn = document.createElement('button')
    markDoneBtn.innerText = '\u2714'
    newTask.appendChild(markDoneBtn)
    //Make a "remove" button, give that text, stick it on the ELEMENT
    let removeBtn = document.createElement('button')
    removeBtn.innerText = '\u2717'
    newTask.appendChild(removeBtn)
    document.getElementById("to-do").appendChild(newTask);
  }

}




function addItem() {
    //Create an ELEMENT
    let itemToAdd = document.createElement("li");
    //Give the ELEMENT text
    let text = document.createTextNode(document.getElementById('item-to-add').value);
    console.log(text)
    itemToAdd.appendChild(text);
    //Make a "done" button, give that text, stick it on the ELEMENT
    markDoneBtn = document.createElement('button')
    markDoneBtn.innerText = '\u2714'
    itemToAdd.appendChild(markDoneBtn)
    //Make the 'done' button click add a class to ELEMENT for CS styling purposes (MAKE THE TOGGLE SETTING IN toDoItems SET ITSELF ACCORDINGLY!!!!)
    markDoneBtn.addEventListener('click', function(evt){
      itemToAdd.classList.toggle('completed')
    })
    //Make a "remove" button, give that text, stick it on the ELEMENT
    removeBtn = document.createElement('button')
    removeBtn.innerText = '\u2717'
    itemToAdd.appendChild(removeBtn)
    //Make the 'remove' button click erase ELEMENT (MAKE SURE TO REMOVE THE ELEMENT FROM toDoItems AS WELL!!!!!)
    removeBtn.addEventListener('click', function(evt){
      document.getElementById('to-do').removeChild(itemToAdd)
    })
    // Add  ELEMENT to the appropriate parent in html
    document.getElementById("to-do").appendChild(itemToAdd);

    // store the text and "done" button toggle state of the ELEMENT in a list that can be saved in localStorage
    // toDoItems.push(document.getElementById('item-to-add').value)
    // console.log(toDoItems)


    toDoItems.push( { "text" : document.getElementById('item-to-add').value, "toggle" : "false"} );
    console.log(toDoItems)

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

  // button event now needs to create a new instance of Task class, then call display()
  new Task(document.getElementById('item-to-add').value, false).display()
  document.getElementById("item-to-add").value=""
});

document.getElementById("item-to-add").addEventListener("keypress", function(e) {
    if (e.keyCode == 13) {
      addItem()
      document.getElementById("item-to-add").value=""
    }
});
//
// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
//  i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }
//
// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
//
// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
//
// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";
//
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);
//
//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }
//
