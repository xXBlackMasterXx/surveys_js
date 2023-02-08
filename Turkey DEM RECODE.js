// Hide the page's content
// document.querySelector("body").style.display = "none"

// Matrices for the recoding
workingStatusTable = [
    ['E',   'E',    'D',    'D',    'D',    'C2',   'C2',   'C2',   'C2'],
    ['D',   'D',    'C2',   'C2',   'C2',   'C1',   'C1',   'C1',   'C1'],
    ['E',   'E',    'D',    'D',    'D',    'C2',   'C2',   'C2',   'C2'],
    ['D',   'D',    'C2',   'C2',   'C2',   'C1',   'C1',   'C1',   'C1'],
    ['-',   '-',    'D',    'C2',   'C2',   'C2',   'C2',   'C2',   'C2'],
    ['E',   'D',    'D',    'C2',   'C2',   'C2',   'C1',   'C1',   'B'],
    ['D',   'C2',   'C2',   'C2',   'C2',   'C1',   'C1',   'B',    'B'],
    ['D',   'C2',   'C2',   'C1',   'C1',   'C1',   'B',    'B',    'B'],
    ['D',   'C2',   'C2',   'C1',   'C1',   'B',    'B',    'B',    'B'],
    ['C2',  'C1',   'C1',   'C1',   'C1',   'B',    'B',    'B',    'A'],
    ['C2',  'C1',   'C1',   'C1',   'B',    'B',    'B',    'A',    'A'],
    ['C1',  'C1',   'C1',   'B',    'B',    'B',    'B',    'A',    'A'],
    ['C1',  'C1',   'B',    'B',    'A',    'A',    'A',    'A',    'A'],
    ['-',   '-',    'C2',   'C1',   'C1',   'B',    'B',    'A',    'A'],
    ['-',   '-',    '-',    '-',    '-',    'B',    'A',    'A',    'A'],
    ['D',   'D',    'D',    'C2',   'C2',   'C2',   'C1',   'B',    'B'],
    ['C2',  'C2',   'C2',   'C2',   'C2',   'C1',   'C1',   'B',    'B'],
    ['C2',  'C1',   'C1',   'C1',   'C1',   'B',    'B',    'A',    'A'],
    ['C2',  'C1',   'C1',   'B',    'B',    'B',    'B',    'A',    'A'],
    ['C1',  'C1',   'C1',   'B',    'B',    'A',    'A',    'A',    'A'],
    ['C1',  'C1',   'B',    'B',    'B',    'A',    'A',    'A',    'A'],
    ['C1',  'C1',   'A',    'A',    'A',    'A',    'A',    'A',    'A'],
    ['-',   '-',    '-',    '-',    '-',    'B',    'A',    'A',    'A']
]

retiredStatusTable = [
    ['E',   'D',    'D',    'D',    'D',    'C2',   'C2',   'C1',   'C1'],
    ['D',   'D',    'D',    'C2',   'C2',   'C2',   'C1',   'C1',   'C1'],
    ['D',   'D',    'D',    'C2',   'C2',   'C1',   'C1',   'C1',   'C1'],
    ['D',   'C2',   'C2',   'C2',   'C2',   'C1',   'C1',   'C1',   'C1'],
    ['D',   'C2',   'C2',   'C2',   'C1',   'C1',   'C1',   'C1',   'C1'],
    ['C2',  'C2',   'C2',   'C1',   'C1',   'C1',   'C1',   'C1',   'C1'],
    ['C2',  'C2',   'C1',   'C1',   'B',    'B',    'B',    'B',    'B'],
    ['-',   '-',    'D',    'C2',   'C2',   'C1',   'C1',   'B',    'B'],
    ['-',   '-',    '-',    '-',    '-',    'C1',   'B',    'B',    'B'],
    ['E',   'D',    'D',    'D',    'D',    'C2',   'C2',   'C1',   'C1'],
    ['D',   'C2',   'C2',   'C1',   'C1',   'C1',   'C1',   'B',    'B'],
    ['C2',  'C2',   'C2',   'C1',   'C1',   'B',    'B',    'B',    'B'],
    ['C2',  'C2',   'C1',   'C1',   'C1',   'B',    'B',    'B',    'B'],
    ['C2',  'C2',   'B',    'B',    'B',    'B',    'B',    'B',    'B'],
    ['-',   '-',    '-',    '-',    '-',    'C1',   'B',    'B',    'B']
]

// Dumb all the question codes and answers into a sigle JSON
var answers = {}
response.answers.forEach((answer) => {
    console.log(answer.pageCode)
    answers[answer.questionCode] = answer.code
})

var SES;

if(answers["PAGE_DEM_SES1"] == "2") {
    row_used = Number(answers["DEM_SES2_WORK"])
    col_used = Number(answers["DEM_SES3"])
    SES = workingStatusTable[row_used-1][col_used-1]
    console.log("working")
    console.log(row_used, col_used)
} else if(answers["PAGE_DEM_SES1"] == "1") {
    row_used = Number(answers["DEM_SES2_RET"])
    col_used = Number(answers["DEM_SES3"])
    SES = retiredStatusTable[row_used-1][col_used-1]
    console.log("retired")
    console.log(row_used, col_used)
}

// Get the radio buttons in the page
radio_buttons = document.querySelectorAll(".form-check > input")
console.log(SES)

// Select a radio button according to the SES value
switch (SES){
    case "A":
        radio_buttons[0].click()
        break;
    case "B":
        radio_buttons[1].click()
        break;
    case "C1":
        radio_buttons[2].click()
        break;
    case "C2":
        radio_buttons[3].click()
        break;
    case "D":
        radio_buttons[4].click()
        break;
    case "E":
        radio_buttons[5].click()
        break;
    case "-":
        radio_buttons[6].click()
        break;
}

// Move next page
// document.querySelector("#p_next").click()