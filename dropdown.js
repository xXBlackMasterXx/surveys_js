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
  "<select class='form-control'>" + generated_labels + "</select>";
// Get the dropdown that has been created
dropdown = document.querySelector("select.form-control");

// Listen to new click events
dropdown.addEventListener("click", () => {
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

/////////////

/*
    FROM DROPDOWN TO RADIO - Version 2
    Author: Kenneth Díaz González
    Email: kdi@synoint.com

    A function to convert from radio buttons to dropdown.
 
    This function required the question code of the radio button
    you want to convert to dropdown.

    This codes works if you have multiple radio buttons in the
    same page but with different question codes.

    i.e, if you have two single select questions but you need 
    to convert JUST ONE to dropdown in the same page, you only 
    need to use this function by passing the question code you want 
    to convert as an argument.

    Example 1: Convert just one single question to dropdown
    // Remember to paste the function before using it!
    from_radio_to_dropdown("Q1")

    Example 2: Convert multiple single select questions to dropdown
    // Remember to paste the function before using it!
    from_radio_to_dropdown("Q1")
    from_radio_to_dropdown("Q2")
*/

// Remember to paste the function below this comment before using it!
function form_radio_to_dropdown(question_code) {
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
  var container = document.querySelector(
    ".question:has(div#p_" + question_code + ")"
  );

  // Get the labels that corresponds to the question code for all the radio buttons
  var labels = document.querySelectorAll(
    ".question.card div#p_" +
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
    "<select class='form-control'>" + generated_labels + "</select>";

  // Get the dropdown we just created
  dropdown = document.querySelector(
    ".question.card:has(div#p_" + question_code + ") > select.form-control"
  );

  // Listen for new click on dropdown
  dropdown.addEventListener("click", () => {
    // Get the selected index of the element selected in dropdown
    selected_index = document.querySelector(
      ".question.card:has(div#p_" + question_code + ") > select.form-control"
    ).selectedIndex;

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
form_radio_to_dropdown("gender_child_1");
