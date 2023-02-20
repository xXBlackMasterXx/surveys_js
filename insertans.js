function add_insertans(filter, selector) {
  response.answers.forEach((answer) => {
    var location = document.querySelector(selector);
    if (answer.questionCode == filter) {
      if (answer.value == "") {
        location.textContent = answer.label;
      } else {
        location.textContent = answer.value;
      }
    }
  });
}

// Example 1: Using an ID
add_insertans(filter = "Q1", selector = "#insert_1");

// Example 2: Using a class name
add_insertans(filter = "Q1", selector = ".insert_1");

// Example 3: Using a query selector
add_insertans(filter = "Q1", selector = "body > div > p");