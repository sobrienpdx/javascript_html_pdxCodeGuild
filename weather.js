


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
