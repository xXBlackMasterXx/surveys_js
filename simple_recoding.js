/*
    Simple recoding - Version 1
    Author: Kenneth Díaz González
    Email: kdi@synoint.com

    This script will let you recode two answers
*/

// Get all the radio buttons in the page
var radio_buttons = document.querySelectorAll(".form-check > input");

// A variable to store the answer we want to focus on
var answers = {};
// Iterate over all the answers saved by SynoSurveys
response.answers.forEach((answer) => {
  // Save the answer in the variable mentioned before, only
  // if it's page and question code are the described above
  if (answer.pageCode == "REC1" && answer.questionCode == "R1") {
    answers[answer.questionCode] = answer.code;
  }

  // Same as the previous if statement but for other page and question code
  else if (answer.pageCode == "REC2" && answer.questionCode == "R2") {
    answers[answer.questionCode] = answer.code;
  }

  // You can add more pages and question codes here
});

// For each case, it will click a radio button by it's position in the array
if (answers["R1"] == "1" && answers["R2"] == "1") {
  radio_buttons[0].click();
} else if (answers["R1"] == "1" && answers["R2"] == "2") {
  radio_buttons[1].click();
} else if (answers["R1"] == "2" && answers["R2"] == "1") {
  radio_buttons[2].click();
} else if (answers["R1"] == "2" && answers["R2"] == "2") {
  radio_buttons[3].click();
} // you can add new conditions here

// The default case will click the last button
// You must change the code according to your use of case.
else {
  radio_buttons[4].click();
}
