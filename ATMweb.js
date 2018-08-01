// # Let’s represent an ATM with a class containing two attributes: a balance and an interest rate. A newly created account will default to a balance of 0 and an interest rate of 0.1%. Implement the initializer, as well as the following functions:
// #
// # check_balance() returns the account balance
// # deposit(amount) deposits the given amount in the account
// # check_withdrawal(amount) returns true if the withdrawn amount won’t put the account in the negative
// # withdraw(amount) withdraws the amount from the account and returns it
// # calc_interest() returns the amount of interest calculated on the account

$(document).ready(function(){ //beginning of jquery


  class BankAccount { //start of class
    constructor(name) {
      this.name = name;
      this.balance = 0;
    }

    // check_balance(){
    //   ("The balance for {} is {}.".format(this.name, this.balance))
    // }



    // withdraw(amt){
    //   if this.balance >= amt:
    //       this.balance -= amt
    //       print("After a withdrawl of {}, the balance for {} is {}.".format(amt, this.name, this.balance))
    //       return this.balance
    //   print("{}: You do not have enough funds for a withdrawl of {}. Current Balance is {}.".format(this.name, amt, this.balance))
    // }


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



function deposit(){
  $('#deposit').click(function(){
    console.log(currentUser.name)
    $(".more-buttons").append(`Amount to deposit: <input id="amt">`);
    $("#amt").keypress(function(e) {
          if(e.which == 13) { //fix this so that if the amount box already exists it doesn't add another
            currentUser.balance += $("#amt").val()
            console.log(currentUser.balance)
            $(".result").text(`The balance for ${currentUser.name} is ${currentUser.balance}`)
          }
    })
  })
}
deposit()

John = new BankAccount('John')
John.name

  //
  // def calculate_interest():
  //     print("Interest is 0.1%")
  // deposit() {//a
  //   $("#deposit").click(function(){ //b
  //     $(".more-buttons").append(`Amount to deposit: <input id="amt">`);
  //     $("#amt").enter
  //     $("#amt").keypress(function(e) {//c
  //       if(e.which == 13) {//d
  //         let x = user.balance += $("#amt").val()
  //         console.log($("#amt").val())
  //       }//d
  //     });//c
  //   });//b
  // }//a



}); //end of jquery
