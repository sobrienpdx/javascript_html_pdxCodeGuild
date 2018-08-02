let total = 0
let numsToTotal = []
let faces = ["I'm zero index!", "\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"]
function getNumber() {
  return Math.floor(Math.random() * Math.floor(6)+1);
}

function createDie(idCode){
  let die = document.createElement('h1')
  die.setAttribute("id", idCode);
  let number = getNumber()
  let dieFace =
  document.getElementById('dice').appendChild(die)
  numsToTotal.push(number)
  console.log(numsToTotal)

  //add re-roll button
  let reRoll = document.createElement('button')
  reRoll.innerText = faces[number]
  die.appendChild(reRoll)
  reRoll.addEventListener('click', (evt) => {
    // document.removeElement(idCode).removeChild(die)
    numsToTotal.push(- number)
    number = getNumber()
    reRoll.innerText = faces[number]
    numsToTotal.push(number)
    printTotal()
  })
}

function printTotal(){
  let total = numsToTotal.reduce((a, b) => a + b, 0)
  document.getElementById("total").innerText=(`Your total is ${total}`)
}

document.getElementById("roll").addEventListener("click", function(){
  let howMany = document.getElementById('howMany').value
  while (howMany >0){
    let number = parseInt(createDie(howMany))
    howMany --
    printTotal()
    document.getElementById("roll").innerText=('Add more')
    document.getElementById("reset").removeAttribute('disabled')
  }
})

document.getElementById("reset").addEventListener("click", function(){
  numsToTotal = []
  printTotal()
  document.getElementById("reset").setAttribute('disabled', 'pickleBananaSandwich')
  document.getElementById("roll").innerText=('Roll')
  let dice = document.getElementById("dice");
  while (dice.firstChild) {
      dice.removeChild(dice.firstChild);
  }
})
