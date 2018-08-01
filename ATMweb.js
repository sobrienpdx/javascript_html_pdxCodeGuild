//Current functionality:
// - creates a currentUser and tracks actions for that single user until page is refreshed
// - deposit, withdraw, checkBalance
// - (transaction history button is currently a decoy)
// - ***NOTE: using jquery! Console cannot directly interface with program.***

//possible improvements:
//- push users to list and handle more than one at a time
//- save JSON string to local storage to save info over sesions
//- fix stupid changeBalance function to re-use the same box
//- add transaction history by pushing events to a list

$(document).ready(function(){ //beginning of jquery


class BankAccount { //start of class
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }
} //end of class

  // get username, create instance of BankAccount class
let currentUser = null

function getCurrentUser(){
  $("#username").keypress(function(e) {
    if(e.which == 13) {
      currentUser = new BankAccount($("#username").val())
      console.log(currentUser.name)
      console.log(currentUser)
    }
  });
}
getCurrentUser()

function changeBalance(action){
  $(".more-buttons").append(`Amount to ${action}: <input id="amt">`);
  $("#amt").keypress(function(e) {
        if(e.which == 13) { //fix this so that if the amount box already exists it doesn't add another
          if (action == "deposit"){
            currentUser.balance += $("#amt").val()
          }
          else if (action == "withdraw"){
            currentUser.balance -= $("#amt").val()
          }
          console.log(currentUser.balance)
          $(".result").text(`The balance for ${currentUser.name} is ${currentUser.balance}`)
        }
  })
}

function deposit(){
  $('#deposit').click(function(){
    console.log(currentUser.name)
    changeBalance("deposit")
  })
}
deposit()

function withdraw(){
  $('#withdraw').click(function(){
    console.log(currentUser.name)
    changeBalance("withdraw")
  })
}
withdraw()

function checkBalance(){
  $('#balance').click(function(){
    console.log(currentUser.name)
    $(".result").text(`The balance for ${currentUser.name} is $${currentUser.balance}`)
  })
}
checkBalance()


}); //end of jquery
