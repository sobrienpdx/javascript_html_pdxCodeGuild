
class ToDoItems {
  constructor() {
    this.toDoItems = []
  }
  add(todo) {
    this.toDoItems.push(todo)
  }
  remove(todo) {
    let idx = this.toDoItems.indexOf(todo)
    this.toDoItems.splice(idx, 1)
  }
}




function addItem() {
    //Create an ELEMENT
    let itemToAdd = document.createElement("li");
    //Give the ELEMENT text
    let text = document.createTextNode(document.getElementById('item-to-add').value);
    itemToAdd.appendChild(text);
    //Make a "done" button, give that text, stick it on the ELEMENT
    markDoneBtn = document.createElement('button')
    markDoneBtn.innerText = '\u2714'
    itemToAdd.appendChild(markDoneBtn)
    //Make the 'done' button click add a class to ELEMENT for CS styling purposes
    markDoneBtn.addEventListener('click', function(evt){
      itemToAdd.classList.toggle('completed')
    })
    //Make a "remove" button, give that text, stick it on the ELEMENT
    removeBtn = document.createElement('button')
    removeBtn.innerText = '\u2717'
    itemToAdd.appendChild(removeBtn)
    //Make the 'remove' button click erase ELEMENT
    removeBtn.addEventListener('click', function(evt){
      document.getElementById('to-do').removeChild(itemToAdd)
    })
    // Add  ELEMENT to the appropriate parent in html
    document.getElementById("to-do").appendChild(itemToAdd);
}


document.getElementById("add").addEventListener("click", function(){
  addItem()
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
