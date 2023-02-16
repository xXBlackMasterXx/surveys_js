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
  input = document.querySelector("#p_" + question_code + "_1");
  input.type = "number";
  input.min = min;
  input.max = max;
  input.step = "1";
  
  input.addEventListener("input", (e) => {
    if(e.target.value != "") {
      if(Number(e.target.value) < input.min) {
        console.log("Menor que minimo")
        e.target.value = input.min;
      }
  
      else if(Number(e.target.value) > input.max) {
        console.log("Mayor que maximo");
        console.log(Number(e.target.value.slice(0, input.max.length)));
        e.target.value = Number(e.target.value.slice(0, input.max.length));
        if(e.target.value > input.max) {
          e.target.value = input.max;
        }
      }
    }
  })
}

numeric_only(
  question_code ="NS1", 
  min = 0, 
  max = 100
)


shuffle(
  question_code = "Q1", 
  groups = [ 
      [0,1], 
      [3,2] 
  ],
  randomize_groups = true 
)