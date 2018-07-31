
let websites = ["https://www.sharesloth.com/sloth-pictures", "http://www.worstcats.tumblr.com/","https://pdxcodeguild.com/", "https://geoguessr.com/famous-places/play", "http://sobrienpdx_portfolio.surge.sh/index.html", "http://www.museivaticani.va/content/museivaticani/it.html", "https://github.com/sobrienpdx", "https://society6.com/s?q=eileen%20o%27brien&context=eileen%20o%27brien", "http://www.worstcats.tumblr.com/", "http://www.worstcats.tumblr.com/"]
// window.location = "https://www.google.com";
// window.location = "http://www.worstcats.tumblr.com/";
// window.location = "https://www.sharesloth.com/sloth-pictures";
//
// https://sharesloth.com/sloth-pictures/
// http://worstcats.tumblr.com/
// https://pdxcodeguild.com/


// Sets the new href (URL) for the current window.
// window.location.replace = "https://www.worstcats.tumblr.com";
let randomNumber= Math.floor((Math.random() * 10))
console.log(randomNumber)


let seconds = 4
window.onload = function() {
  setInterval(function(){
    document.getElementById("message").innerText=`${seconds}`
    if (seconds === 0){
      window.location = websites[randomNumber]
    }
  seconds --
  },
    1000);

};
