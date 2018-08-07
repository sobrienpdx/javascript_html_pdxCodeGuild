// Make a 5x4 grid of hole images.
// Every second, randomly pick a hole in the grid and turn it’s image into a mole.
// If the user clicks on a mole image, turn it back into a hole.
//
// Use the setInterval function to run a callback function periodically.
//
// ADVANCED
// Keep score.
//
// Every mole that’s hit is 100 points
// Every hole that’s clicked is -50 points
// If the whole screen gets filled with moles, they lose, and the game stops.
// Every 10 seconds, increase the rate at which moles appear.

let score = 0

function setUpPointListeners(){
  const moles = document.getElementsByTagName("img")
  for (let i=0; i<moles.length; i++) {
    moles[i].addEventListener('click', function(){
      if (moles[i].classList.contains("points")){
        score += 100
        document.getElementById("score").innerText=`Score: ${score}`
        moles[i].classList.remove("points")
        moles[i].src="emptySVG.svg"
      }
      else{
        score-= 50
        document.getElementById("score").innerText=`Score: ${score}`
      }
    })
  }
}
setUpPointListeners()

function randNum(){
  return Math.floor(Math.random() * 9)
}

function randTime(){
  return Math.floor(Math.random() * 2500) + 500
}

function mole(harderLevel){
  let num = randNum()
  // let time = randTime() - harderLevel
  let time = 5000 - harderLevel
  document.getElementById(num).src="mole.svg"
  document.getElementById(num).classList.add("points")
  setTimeout(function(){
  document.getElementById(num).src="emptySVG.svg"
  document.getElementById(num).classList.remove("points")
  }, time);
}

function lotsOfMoles(harderLevel, winLevel, level){
  let stop = setInterval(function(){
    mole(harderLevel)
    console.log(level)
    if (score > winLevel){
      document.getElementById("level").innerText=`Level ${level +1}`
      lotsOfMoles((harderLevel+1000), (winLevel+500), (level+1))
      console.log("I made it past the not recursive call")
      clearInterval(stop)
    }
  }, 1000);

}




lotsOfMoles(0, 300, 1)
