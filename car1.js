// Custom scripts CSS for this project
// Variable to save your styles
var styles = `
    #header {
      height: 106px;
      width: 100%;
      background-color: white;
      background-image: url(https://syno-media-input.s3.eu-west-1.amazonaws.com/457183/c2c88b72355e0e7ef7e943f06d6a6ea1.jpg);
      background-repeat: no-repeat;
      background-position: center;
    }
`

// Create a style DOM node
var styleSheet = document.createElement("style")
// Add the styles to the stylesheet
styleSheet.innerText = styles
// Append the stylesheet in the head of the HTML code
document.head.appendChild(styleSheet)

/* Get all the question containers */
var containers = document.querySelectorAll(
  "body > div > div:nth-child(2) > div > div > form > div"
);

/* First. Limit Registration number to max. 10 input characters */
// Get the registration number input
var input = document.querySelector("#p_Q1_1");
// Set max length to 10
input.maxLength = 10;
// Remove the input from UI
input.remove();

/* Second. Add the button to query database */
// Get the container where Q1 is in
var main_container = containers[0];
// Create a new DOM node with the input and the button as an input group (see. Input-groups in Boostrap 4)
var button =
  `
  <div class="input-group mb-3">
  ` +
  input.outerHTML +
  `
    <div class="input-group-append" style="margin-top: 15px;">
      <button class="btn btn-warning" type="button" id="search">LOOKUP REG</button>
    </div>
  </div>
`;
// Add the new input group to the main container
main_container.innerHTML += button;
// Get the registration number input again
input = document.querySelector("#p_Q1_1");

// Hide the 2nd-5th containers
for (let i = 1; i < 5; i++) {
  containers[i].style.display = "none";
}

/* Third. Adding additional styles to the confirmation */
// Get the secondary container
var secondary_container = containers[5];
// Get the confirmation buttons
var confirm_buttons = secondary_container.querySelectorAll(".form-check");
// Add classes to yes-no buttons
confirm_buttons[0].classList.add("w-50");
confirm_buttons[0].classList.add("float-left");
confirm_buttons[0].classList.add("pr-1");
confirm_buttons[1].classList.add("w-50");
confirm_buttons[1].classList.add("float-right");
confirm_buttons[1].classList.add("pl-1");
secondary_container.querySelector("#p_Q3").classList.add("mb-5");

// An HTML table were data will be displayed
var result_table = `
    <br>
    <div class="table-responsive-sm" id="result_table">
        <table class="table table-sm table-striped table-bordered text-center">
            <thead>
                <tr>
                <th scope="col" colspan="2"><p class="text-center lead my-1">Your car details</p></th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Make</th>
                <td><span id="make"></span></td>
                </tr>
                <tr>
                <th scope="row">Model</th>
                <td><span id="model"></span></td>
                </tr>
                <tr>
                <th scope="row">Year</th>
                <td><span id="year"></span></td>
                </tr>
            </tbody>
        </table>
    </div>
    `;
secondary_container.innerHTML += result_table;
// Hide the secondary container until a query is successful
secondary_container.style.display = "none";

// A function to modify the table data
function modify_table(make, model, year){
    document.querySelector("#make").textContent = make;
    document.querySelector("#model").textContent = model;
    document.querySelector("#year").textContent = year;
}

/* Fourth. Add a search to query */
document.querySelector("#search").addEventListener("click", (e) => {
  if(input.value != ""){
    if (input.value === "TEST123") {
      modify_table(make = "Test model", model = "Test model", year = "Test year")
    }
  
    else { 
      modify_table(make = "1999", model = "Z Generation", year = "2023")
    }
  
    secondary_container.style.display = "block";
  }
  
});