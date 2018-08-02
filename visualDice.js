let total = 0
let numsToTotal = []
function getNumber() {
  return Math.floor(Math.random() * Math.floor(6)+1);
}

function createDie(){
  let die = document.createElement('h1')
  let number = getNumber()
  die.innerText = number
  document.getElementById('dice').appendChild(die)
  numsToTotal.push(number)
  console.log(numsToTotal)

  //add re-roll button
  let reRoll = document.createElement('button')
  reRoll.innerText = 're-roll'
  die.appendChild(reRoll)
  reRoll.addEventListener('click', (evt) => {
    document.getElementById('dice').removeChild(die)
    numsToTotal.push(- number)
    createDie()
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
    let number = parseInt(createDie())
    howMany --
    printTotal()
    document.getElementById("roll").innerText=('Add more')

  }
})
