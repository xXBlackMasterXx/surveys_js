// Hide the page
// document.querySelector("body").style.display = "none";

// Set the names of the pages you want to compare
var first_page = "PAGE1"
var second_page = "PAGE2"

// Create a new empty JSON to store the questionPages with their respective answer codes 
var answers = {}
// For each answer in the available answers in Survey
response.answers.forEach((answer) => {
  // Store them into the new object
  answers[answer.pageCode] = answer.code
})

// Get all the radio buttons in the page
var radio_buttons = document.querySelectorAll(".form-check > input")
// A flag to determine if a matched was found
var flag = false;

// Iterate other all the available options in the first and second page
for(let i=1;i<=radio_buttons.length-1;i++){
  // If answer in first_page is exactly the same as in second_page
  if(answers[first_page] == String(i) && answers[second_page] == String(i)) {
    // Click the radio button
    radio_buttons[i-1].click()
    // Raise a flag to say that you found a match
    flag = true;
    // Break the loop if mark one option
    break
  }  
}

// If a match was not found
if(flag == false) {
  // Select the default button for "ALL OTHER COMBINATIONS" 
  radio_buttons[radio_buttons.length-1].click()
}

// Click the "next" button
// document.querySelector("#p_next").style.display = "none";