// Variable to save your styles
var styles = `
    thead {
      background-color: white;
      position: sticky;
      top: 0;
      z-index: 100;
    }
`
// Create a style DOM node
var styleSheet = document.createElement("style")
// Add the styles to the stylesheet
styleSheet.innerText = styles
// Append the stylesheet in the head of the HTML code
document.head.appendChild(styleSheet)