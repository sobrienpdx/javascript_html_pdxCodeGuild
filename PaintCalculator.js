
// height = int(input("And the height in feet? "))
// another_wall = input("Do you have any other walls to paint? y/n ")

// while another_wall == "y":
//     width_other_wall = int(input("How wide is the other wall? "))
//     width = width + width_other_wall
//     height_other_wall = int(input("How high is the other wall? "))
//     height = height + height_other_wall
//     another_wall = input("Do you have any other walls to paint? y/n ")

// windows = input("Are there any windows or doors that you aren't painting that need to be subtracted from the area of the wall? ")
// if windows == "y":
//     window_width = int(input("In feet, how wide is the window/door? "))
//     window_height = int(input("And the height in feet? "))
//     another_window = input("Do you have any other windows or doors to account for? y/n ")

    // while another_window == "y":
    //     width_other_window = int(input("How wide is the other window/door? "))
    //     window_width = windw_width + width_other_window
    //     height_other_window = int(input("How high is the other window/door? "))
    //     window_height = widnow_height + height_other_window
    //     another_window = input("Do you have any other windows or doors to account for? y/n ")

// def calculate_gallons():
//     area = (width - window_width) * (height - window_height)
//     gallons_needed = area // 400 + 1
//     print("Your wall is {} sq ft. You will need {} gallon/s.".format(area, gallons_needed))
//     return gallons_needed


function calculateArea(){
  let width =  document.getElementById("width").value
  let height =  document.getElementById("height").value
  let area = width * height
  return area
}

function calculatePrice(area){
  let gallons_needed = Math.floor(area / 400) + 1
  let total = gallons_needed * document.getElementById("price").value * document.getElementById("coats").value
  return total
}


document.getElementById("submitArea").addEventListener("click", function(){
  let tellArea = document.getElementById("area")
  tellArea.innerText =`You need to paint an area of ${calculateArea()} sq ft.`
});


document.getElementById("submitPaint").addEventListener("click", function(area_input){
  let area = calculateArea()
  let result = document.getElementById("result")
  result.innerText = `You need ${calculatePrice(area)} dollars of paint.`
});
