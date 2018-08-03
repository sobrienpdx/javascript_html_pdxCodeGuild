fetch('https://favqs.com/api/qotd')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    findQuote(myJson)

  });


// console.log(quote[quote][body])
// console.log("quotey quote:" + quote)
function findQuote(json){
  let q = json['quote']['body']
  let a = json['quote']['author']
  document.getElementById('quote').innerText=(q)
  document.getElementById('author').innerText=(a)

}
