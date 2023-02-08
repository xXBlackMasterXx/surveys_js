/*
    SIMPLE MATRIX RECODING - Version 1
    Author: Kenneth Díaz González
    Email: kdi@synoint.com

    A simple script to recode rows that matches certain column codes
    into a multiple checkbox.

    Checkboxes and rows in matrix must be in the same order
    because the code will recode based in their index (position).
    Example:
                = Matrix =
                    COL1    COL2    COL3    COL4
    Hershey's       []      []      [*]     []
    KitKat          []      []      []      [*]
    Ferrero         []      []      []      []
    M&M's           []      []      []      []

                = Checkboxes =
    
    Hershey's [*]
    KitKat    [*]
    Ferrero   []
    M&M's     []

*/

// Get all the checkboxes in the page
var checkboxes = document.querySelectorAll(".form-check > input")
// Iterate over all the saved answers by Survey
response.answers.forEach((answer) => {
    // If the page code and question code matches to our matrix
    if(answer.pageCode == "Matrix_recoding_1" && answer.questionCode == "M1") {
        // If the column code matches (change to your neededs)
        if(answer.columnCode == "3" || answer.columnCode == "4") {
            // Click the checkbox based in the rowcode of the matrix
            checkboxes[Number(answer.rowCode)-1].click();
        }
    }
})