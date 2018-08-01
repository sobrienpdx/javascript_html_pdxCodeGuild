let total = 0
function getNumber() {
  return Math.floor(Math.random() * Math.floor(6)+1);
}

function createDie(){
  let die = document.createElement('h1')
  die.innerText = getNumber()
  document.getElementById('dice').appendChild(die)
  return die.innerText
}

document.getElementById("roll").addEventListener("click", function(){
  let howMany = document.getElementById('howMany').value
  while (howMany >0){
    let number = parseInt(createDie())
    total += number
    howMany --
    document.getElementById("total").innerText=(`Your total is ${total}`)
  }
})
