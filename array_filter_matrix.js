function matrix_array_filter(question_code, type, error_message = "Fill out all the rows with a valid response.") {
    // Array with indexes from filtered page
    array_filter = [];

    // Iterate over the answers
    response.answers.forEach((answer) => {
        // If responses matches to page and question
        if(answer.questionCode == question_code){
            // Save data to array filter
            array_filter.push(Number(answer.code)-1);
        }
    })

    // Get all the rows before filter 
    original_rows = document.querySelectorAll("table > tbody > tr")

    // Iterate over all the rows
    original_rows.forEach((row, index) => {
        if(typeof(type) == "undefined") {
            // If the row is not included in the array filter
            if(!array_filter.includes(index)){
                // Remove the row
                row.remove();
            }
        }

        else{
            if(type == "exclusive") {
                // If the row is included in the array filter
                if(array_filter.includes(index)){
                    // Remove the row
                    row.remove();
                }
            }
        }

    })

    // Get all the rows after the filter
    displayed_rows = document.querySelectorAll("table > tbody > tr")

    // Check if next button is pressed
    document.querySelector("#p_next").addEventListener("click", (e) => {
        // Variable to count number of checked buttons
        n_checked = 0;
        // Get all the buttons in the matrix
        inputs = document.querySelectorAll(".form-check > input");
        // Count the number of checked buttons
        inputs.forEach((input) => {
            if(input.checked == true){
                n_checked++;
            }
        })

        // If the number of checked buttons is not equals to the displayed rows
        if(n_checked != displayed_rows.length) {
            // Avoid the next button to go to the next page
            e.preventDefault();
            // Show an alert message
            alert(error_message);
        }
    })
}

matrix_array_filter(question_code = "AF1")