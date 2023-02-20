function numeric_only(question_code, min = 0, max = Infinity) {
  // Variable to save your styles
  var styles = `
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    input[type="number"] {
      -moz-appearance: textfield;
    }
`;

  // Create a style DOM node
  var styleSheet = document.createElement("style");
  // Add the styles to the stylesheet
  styleSheet.innerText = styles;
  // Append the stylesheet in the head of the HTML code
  document.head.appendChild(styleSheet);

  // Add properties to allow only numeric inputs
  input = document.querySelector("#p_" + question_code + "_1");
  input.type = "number";
  input.min = min;
  input.max = max;
  input.step = "1";

  input_div = document.querySelector(
    ".question.card:has(#p_" + question_code + "_1) > div"
  );

  validation_message = "<div class='invalid-feedback' id='" + question_code + "_validation'></div>";
  input_div.innerHTML += validation_message;

  // Data validation
  input.addEventListener("keyup", (e) => {
    message = document.querySelector("#" + question_code + "_validation")
    // If input is not empty
    if (e.target.value != "") {
      if (Number(e.target.value) < input.min) {
        console.log("min!")
        input.classList.add("is-invalid");
        document.querySelector(question_code + "_validation").textContent = "Error 1"
      } 
      
      else if (Number(e.target.value) > input.max) {
        console.log("max!")
        input.classList.add("is-invalid");
        document.querySelector(question_code + "_validation").textContent = "Error 2"
      } 
      
      else {
        input.classList.remove("is-invalid")
      }
    }
  });
}

numeric_only(question_code = "QAGE", min = 0, max = 100);