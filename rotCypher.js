
let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h",
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h",
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h",
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h",
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function getUncodedMessage(){
  let rotation = parseInt(document.getElementById("rotation").value)
  let cypheredMessage = []
  console.log(`cypheredMessage is ${cypheredMessage}`)
  let messageList = document.getElementById("uncodedMessage").value.split("");
  for (let i=0; i<messageList.length; ++i) {
      console.log(`messageList[i] is ${messageList[i]}`)
      // cypheredMessage.push(messageList[i])
      // console.log(cypheredMessage)
      if (messageList[i] != " "){
          console.log(`characters.indexOf(messageList[i]) is ${characters.indexOf(messageList[i])}`)
          let newIndex = parseInt(characters.indexOf(messageList[i])) + rotation
          console.log(`characters.indexOf(messageList[i]) + rotation is ${characters.indexOf(messageList[i]) + rotation}` )
          console.log(rotation)
          cypheredMessage.push(characters[newIndex])
          console.log(`characters[newIndex] is ${characters[newIndex]}`)
          console.log(characters[newIndex])
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
  // console.log(getUncodedMessage())

  let codedResult = document.getElementById("codedResult")
  codedResult.innerText =`${getUncodedMessage()}`
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
