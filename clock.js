// Make a clock that displays the current time and updates every second. Check out JavaScript timing events and dates. Writing new Date() creates a date with the current date and time. You can then create a string from that date, and set it in the DOM.
//
// VERSION 2
// Next make a stopwatch. Start with a button that says ‘start’. You can then create a date to keep track of the time, and use setHours(0,0,0,0). This function will set the date’s time to 0 hours, 0 minutes, 0 seconds, and 0 milliseconds. Then set an interval to add 1 to the seconds of that date every second, and show the time in an html element. Add a ‘lap’ button which takes takes the current time and shows it in a separate list. E.g.
//
// Lap 1: 00:01:03
// Lap 2: 00:02:34
// Lap 3: 00:04:21
// VERSION 3 (OPTIONAL)
// Next make a countdown timer. The countdown timer should have a text input for the time, and a drop-down list for the units (seconds, minutes, hours). Set an interval which will start a date at the given time, and decrement the seconds each second. The countdown timer should alert the user when it’s finished (using an alert("time's up") or changing the background color, etc).
//
// There should be controls on the page to switch between the clock, stopwatch, and countdown timer (hint: display:none or $('#the_div').hide() and .show() if using jQuery).
//
// VERSION 4 (OPTIONAL)
// Use animations when switching between the clock, stopwatch, and countdown timer (slide in/out, fade in/out).
//Date.now
//instance.getHours()
// console.log(new Date())
// add function to pad seconds with 0
// str.padStart(targetLentgth, [padString])

//get the current time/date and store it in variables
let now = new Date;
let hour = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()

function printCurrentTime(where){
  document.getElementById(where).innerText=(`${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`)
}

setInterval(function(){
  now = new Date;
  hour = now.getHours()
  minutes = now.getMinutes()
  seconds = now.getSeconds()
  printCurrentTime("time")
}, 1000);

let timer = new Date(0, 0, 0, 0, 0, 0);
let hourTimer = timer.getHours()
let minutesTimer = timer.getMinutes()
let secondsTimer = timer.getSeconds()


function stopwatch(){
  let i =0;
  let intervalID = setInterval(function(){
    // year, month, day, hour, minute, second
    let timer = new Date(0, 0, 0, 0, 0, i);
    document.getElementById("timer").innerText=(`${timer.getHours().toString().padStart(2, "0")}:${timer.getMinutes().toString().padStart(2, "0")}:${timer.getSeconds().toString().padStart(2, "0")}`)
    i++
  }, 1000)
  return intervalID
}


document.getElementById("start").addEventListener('click', (evt) => {
  let stop = stopwatch()
  document.getElementById("stop").addEventListener('click', (evt) => {
    clearInterval(stop)
  })
})




// setInterval(function(){
//   printTimerTime()
//   secondsTimer += 1
// }, 1000);

// function printTimerTime(){
//   document.getElementById("timer").innerText=(`${hourTimer.toString().padStart(2, "0")}:${minutesTimer.toString().padStart(2, "0")}:${secondsTimer.toString().padStart(2, "0")}`)
// }
