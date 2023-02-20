// V1 Works in Firefox, 
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
  "<select class='form-control'>" + generated_labels + "</select>";
// Get the dropdown that has been created
dropdown = document.querySelector("select.form-control");

// Listen to new click events
dropdown.addEventListener("change", () => {
  // Get the index of the selected option of the dropdown
  selected_index = document.querySelector("select.form-control").selectedIndex;
  // If the selected index doesn't corresponds to the placeholder
  if (selected_index != 0) {
    // Get all the available radio buttons at background (they are hidden)
    let radio_buttons = document.querySelectorAll(".form-check > input");
    // Select according to the dropdown index - 1 ('cause radios start from 0)
    radio_buttons[selected_index - 1].click();
  }
});


// V2
// Remember to paste the function below this comment before using it!
function from_radio_to_dropdown(question_code) {
  // Get all the single select answers that corresponds to the question code
  var answer_options = document.querySelectorAll(
    ".question.card div#p_" + question_code + " > .form-check"
  );

  // Iterate over them
  answer_options.forEach((answer) => {
    // Hide them all
    answer.style.display = "none";
  });

  // Get the container that corresponds to the question code
  container = document.querySelector("div:is(#p_" + question_code + ")") 

  // Get the labels that corresponds to the question code for all the radio buttons
  var labels = document.querySelectorAll(
    "div#p_" +
      question_code +
      " > .form-check > label > div > div"
  );

  // Create a new HTML node for the dropdown
  var generated_labels =
    "<option selected disabled hidden>Choose an option...</option>";
  // For each found label
  labels.forEach((label, index) => {
    // Add each label as an element to the dropdown
    label.style.display = "none";
    generated_labels +=
      "<option value='index'>" + label.textContent + "</option>";
  });

  // Add this dropdown with all the options in the question's container
  container.innerHTML +=
    "<select class='form-control' id='dropdown_" + question_code + "'>" + generated_labels + "</select>";

  // Get the dropdown we just created
  dropdown = document.querySelector(
    "div:is(div#p_" + question_code + ") > select.form-control"
  );

  // Listen for new click on dropdown
  dropdown.addEventListener("change", () => {
    // Get the selected index of the element selected in dropdown
    selected_index = document.querySelector("#dropdown_" + question_code).selectedIndex;

    // If the index doesn't correspond to the placeholder
    if (selected_index != 0) {
      // Get all the radio buttons that are hidden
      let radio_buttons = document.querySelectorAll(
        ".question.card div#p_" + question_code + " > .form-check > input"
      );

      // Click the right radio button in the background
      // taking the dropdown index as a reference.
      radio_buttons[selected_index - 1].click();
    }
  });
}

// Call the function and pass the question code as an argument
from_radio_to_dropdown("Q1");
from_radio_to_dropdown("Q2");