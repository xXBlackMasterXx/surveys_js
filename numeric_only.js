/*
    NUMERIC ONLY - Version 1
    Author: Kenneth Díaz González
    Email: kdi@synoint.com

    A snippet to allow that a textbox only receives numbers

    This code will add this caracteristic for all the text inputs 
    that appear in the page. If you need to be more specific, use version 2
    instead.
*/

// Get all the input texts
inputs = document.querySelectorAll(".custom-text");
// Iterate over them
inputs.forEach((input) => {
  // If something has been written
  input.addEventListener("keyup", (e) => {
    // Replace the letters with empty strings
    e.target.value = e.target.value.replace(/\D/g, "");
  });
});

/*
    ADVANCED NUMERIC ONLY - Version 2
    Author: Kenneth Díaz González
    Email: kdi@synoint.com

    A snippet to allow that a textbox only receives numbers

    This code will add this caracteristic for a specified text input.
*/

function numeric_only(question_code) {
  // Get all the input texts
  input = document.querySelector("#p_" + question_code + "_1");
  input.addEventListener("keyup", (e) => {
    // Replace the letters with empty strings
    e.target.value = e.target.value.replace(/\D/g, "");
  });
}

// Call the function to apply it
numeric_only("UC1a");
