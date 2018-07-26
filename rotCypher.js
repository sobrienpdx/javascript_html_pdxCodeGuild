
let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


function cypherMessage(operator, message){
  let rotation = parseInt(document.getElementById("rotation").value)
  let cypheredMessage = []
  let messageList = message.value.split("");
  console.log(messageList)
  for (let i=0; i<messageList.length; ++i) {
      if (messageList[i] != " "){
          if (operator == 'add'){
            index = parseInt(characters.indexOf(messageList[i])) + rotation
            let newIndex = index % 26
            // let newIndex = (index > 25 ? index-26 : index)

            cypheredMessage.push(characters[newIndex])
          }
          else if (operator == 'subtract'){
            let index = parseInt(characters.indexOf(messageList[i])) - rotation
            while (index < 0) {
              index += 26
            }
            cypheredMessage.push(characters[index])
          }
      }
      else {
          cypheredMessage.push(" ")
        }
  }
  console.log(cypheredMessage)
  let encodedMessage = (cypheredMessage.join(''));
  console.log(encodedMessage)
  return encodedMessage
}

document.getElementById("btEncode").addEventListener("click", function(){
  let codedResult = document.getElementById("codedResult")
  let message = document.getElementById("uncodedMessage")
  codedResult.innerText =`${cypherMessage('add', message)}`

})

document.getElementById("btDecode").addEventListener("click", function(){
  let codedResult = document.getElementById("uncodedResult")
  let message = document.getElementById("codedMessage")
  codedResult.innerText =`${cypherMessage('subtract', message)}`
})


//
// function perform_cypher(string_to_cypher, rotation, characters){
//     let cyphered_message = []
//     let message_list = string_to_cypher.split("");
//     console.log(message_list)
//     for (let i=0; i<message_list.length; ++i) {
//         console.log(message_list[i])
//         if (message_list[i] != " "){
//             let new_character_index = characters.indexOf(message_list[i]) + rotation
//             cyphered_message.push(characters[new_character_index])
//             console.log(cyphered_message)
//         }
//         else {
//             cyphered_message.push(" ")
//           }
//       }
//       let zipped_cyphered_message = (cyphered_message.join(''));
//       console.log(zipped_cyphered_message)
//       return zipped_cyphered_message
// }
//
//
// function perform_cypher_backwards(string_to_cypher, rotation, characters){
//     let cyphered_message = []
//     let message_list = string_to_cypher.split("");
//     console.log(message_list);
//     for (let i=0; i<message_list.length; ++i) {
//         if (message_list[i] != " "){
//             let new_character_index = characters.indexOf(message_list[i], 50) - rotation
//             cyphered_message.push(characters[new_character_index])
//           }
//         else{
//             cyphered_message.push(" ")
//           }
//         }
//         let zipped_cyphered_message = (cyphered_message.join(''));
//         console.log(zipped_cyphered_message)
//         return zipped_cyphered_message
// }
//
//
//
// let rotation = prompt("This program will take a word or phrase and convert it to a cypher. \nThe default for the cypher rotation is 13. \nWould you like to use the default or set your own number? ")
// if (rotation == "default"){
//     rotation = 13
//   }
// else{
//    rotation = parseInt(rotation)
// }
// let string_to_cypher = prompt("Type the message you would like to encode: ")
// let message = perform_cypher_backwards(string_to_cypher, rotation, characters)
//
// let result = document.getElementById("result")
// result.innerText = `"${string_to_cypher}" in cypher is "${message}"`;
//
//
//
// while (true){
//     let other_action = prompt("Would you like to cypher another message (type 'cypher') or decode a cyphered message (type 'decode')? ")
//     if (other_action == "decode"){
//         string_to_cypher = input("input text to decode: ")
//         message = (perform_cypher_backwards(string_to_cypher, rotation))
//         console.log(message)
//       }
//     else if(other_action == "cypher"){
//         string_to_cypher = input("enter text to cypher: ")
//         message = perform_cypher(string_to_cypher, rotation)
//         console.log(message)
//       }
//     else {
//         break
//       }
//     }
