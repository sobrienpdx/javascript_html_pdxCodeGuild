
let websites = ["https://www.sharesloth.com/sloth-pictures", "http://www.worstcats.tumblr.com/","https://pdxcodeguild.com/", "https://geoguessr.com/famous-places/play", "http://sobrienpdx_portfolio.surge.sh/index.html", "http://www.museivaticani.va/content/museivaticani/it.html", "https://github.com/sobrienpdx", "https://society6.com/s?q=eileen%20o%27brien&context=eileen%20o%27brien", "http://www.worstcats.tumblr.com/", "http://www.worstcats.tumblr.com/"]

let randomNumber= Math.floor((Math.random() * 10))
console.log(randomNumber)

let seconds = 5
window.onload = function() {
  let intervalID = setInterval(function(){
    document.getElementById("message").innerText=`${seconds}`
    if (seconds <0){
      document.getElementById("inlineFrameExample").src=websites[randomNumber]
      document.getElementById("message").innerText=``
      clearInterval(intervalID)
      document.getElementById("header").innerText=`New Page!!!!`
    }
  seconds --
  },
    1000);

// let seconds = 5
// window.onload = function() {
//   setInterval(function(){
//     document.getElementById("message").innerText=`${seconds}`
//     if (seconds === 0){
//       window.location = websites[randomNumber]
//     }
//   seconds --
//   },
//     1000);

};
