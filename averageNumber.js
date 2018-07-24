
let number;
number = prompt("Number?")

let nums = []


while (number != "done"){
    nums.push(number)
    // length = (len(nums))
    number = prompt("Number or done? ")
}

let total = 0

for (let i=0; i<nums.length; ++i) {
  total += parseInt(nums[i])
}


let average = total / nums.length

let answer = document.getElementById("result")
answer.innerText = `The average of those numbers is ${average}.`;

console.log(`The average of those numbers is ${average}.`)
