/*
    FROM DROPDOWN TO RADIO - Version 1
    Author: Kenneth Díaz González
    Email: kdi@synoint.com

    A function to convert from radio buttons to dropdown.
 
    This function allows to change the question type from
    single select to dropdown. This version only works if you have a only
    one single select question in the page. If not, use Version 2 instead.
*/

// Get all the single select answers
var answer_options = document.querySelectorAll(".form-check");
// Iterate over them
answer_options.forEach((answer) => {
  // Hide them
  answer.style.display = "none";
});

// Get the container that wrap the answers
var container = document.querySelector(".question");
// Get the labels from the radio buttons
var labels = document.querySelectorAll(".form-check > label > div > div");
// Create a new HTML node to add the dropdown
var generated_labels =
  "<option selected disabled hidden>Choose an option...</option>";
// For each label
labels.forEach((label, index) => {
  // Add it as a new option in the dropdown
  label.style.display = "none";
  generated_labels +=
    "<option value='index'>" + label.textContent + "</option>";
});

// Add the dropdown with the auto generated options into the question container
container.innerHTML +=
  "<select class='form-control' multiple='multiple'>" + generated_labels + "</select>";
// Get the dropdown that has been created
dropdown = document.querySelector("select.form-control");

// Listen to new click events
dropdown.addEventListener("click", () => {
  // Get the index of the selected option of the dropdown
  selected_index = document.querySelector("select.form-control").selectedIndex;
  console.log(selected_index)
  // If the selected index doesn't corresponds to the placeholder
  if (selected_index != 0) {
    // Get all the available radio buttons at background (they are hidden)
    let radio_buttons = document.querySelectorAll(".form-check > input");
    // Select according to the dropdown index - 1 ('cause radios start from 0)
    radio_buttons[selected_index - 1].click();
  }
});