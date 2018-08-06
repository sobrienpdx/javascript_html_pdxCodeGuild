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

function addPoints(){
  const moles = document.getElementsByTagName("img")
  for (let i=0; i<moles.length; i++) {
    moles[i].addEventListener('click', function(){
      if (moles[i].classList.contains("points")){
        score += 100
        document.getElementById("score").innerText=`Score: ${score}`
      }
      else{
        score-= 50
        document.getElementById("score").innerText=`Score: ${score}`
      }
    })
  }
}
addPoints()

function randNum(){
  return Math.floor(Math.random() * 9)
}

function randTime(){
  return Math.floor(Math.random() * 2500) + 500
}

function mole(){
  let num = randNum()
  let time = randTime()
  document.getElementById(num).src="mole.svg"
  document.getElementById(num).classList.add("points")
  setTimeout(function(){
  document.getElementById(num).src="emptySVG.svg"
  document.getElementById(num).classList.remove("points")
  }, time);
}

function lotsOfMoles(howFast, winLevel, level){
  let stop = setInterval(function(){
    mole()
    console.log(level)
    if (score > winLevel){
      document.getElementById("level").innerText=`Level ${level +1}`
      lotsOfMoles(howFast +500, (winLevel+1000), level++)
      console.log(level)
      clearInterval(stop)
    }
  }, howFast);

}




lotsOfMoles(1000, 300, 1)
