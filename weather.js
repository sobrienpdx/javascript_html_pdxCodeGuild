


  //
  // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}
  // Parameters:
  // lat, lon coordinates of the location of your interest
  // Examples of API calls:
  // api.openweathermap.org/data/2.5/forecast?lat=35&lon=139


  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
      }
  }
  function showPosition(position) {
      // document.getElementById("location").innerHTML = "Latitude: " + position.coords.latitude +
      // "<br>Longitude: " + position.coords.longitude;
      fetch(`http://api.openweathermap.org/data/2.5/weather?id=524901&units=imperial&lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=376d39e1b99e5d606970839242793243`)
        .then(function(response) {
          return response.json();
        })
        .then(function(weather) {
          console.log(weather)
          document.getElementById('location').innerText=(weather['name'])
          document.getElementById('description').innerText=(weather['weather']['0']['description'])
          document.getElementById('temp').innerText=(weather['main']['temp'] + "\u00B0")

        });
  }
  getLocation()

  // let myHeaders = new Headers();
  // myHeaders.append('Access-Control-Allow-Origin', '*')
  // myHeaders.append('Vary', 'Origin')

  function random(){
    let num = Math.floor(Math.random() * 2000)
    console.log(num)
    return num
  }
let num =random()


fetch(`http://xkcd.com/${num}/info.0.json`)
  .then(function(response) {
    return response.json();
  })
  .then(function(xkcd) {
    console.log(xkcd)
    document.getElementById('title').innerText=(xkcd['title'])
    document.getElementById('xkcd').src=(xkcd['img'])

  });




  // let myHeaders = new Headers();
  // myHeaders.append('Access-Control-Allow-Origin', '*')
//   myHeaders.append('Access-Control-Allow-Headers', 'Origin');
//   // my.Headers.append("Origin", )
//
//
//
// //   header('Access-Control-Allow-Origin: *');
// // header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// // header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
//
//   fetch('https://randomfox.ca/floof/?nocors', {'headers': myHeaders})
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(fox) {
//       document.getElementById('fox').scr=(fox['link'])
//     });
