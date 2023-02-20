function array_filter(filter, question_code, type, required_selections = 1, error_message = "Please, add your custom message error") {
    // Array with indexes from filtered page
    array_filter = [];

    // Iterate over the answers
    response.answers.forEach((answer) => {
        // If responses matches to page and question
        if(answer.questionCode == filter){
            // Save data to array filter
            array_filter.push(Number(answer.code)-1);
        }
    })

    // Get all the options before filter 
    container = document.querySelector("#p_" + question_code)

    // Iterate over all the options
    container.querySelectorAll(".form-check").forEach((option, index) => {
        if(typeof(type) == "undefined") {
            // If the row is not included in the array filter
            if(!array_filter.includes(index)){
                // Remove the row
                option.remove();
            }
        }

        else {
            if(type == "exclusive") {
                // If the row is included in the array filter
                if(array_filter.includes(index)){
                    // Remove the row
                    option.remove();
                }
            }
        }

    })

    // Get all the options after the filter
    container = document.querySelector("#p_" + question_code)

    // Check if next button is pressed
    document.querySelector("#p_next").addEventListener("click", (e) => {
        // Variable to count number of checked buttons
        n_checked = 0;
        // Get all the buttons
        inputs = container.querySelectorAll(".form-check > input");
        // Count the number of checked buttons
        inputs.forEach((input) => {
            if(input.checked == true){
                n_checked++;
            }
        })

        // If the number of checked buttons is not equals to the displayed rows
        if(n_checked < required_selections) {
            // Avoid the next button to go to the next page
            e.preventDefault();
            // Show an alert message
            alert(error_message);
        }
    })
}

array_filter(
    filter =  "AF1", 
    question_code = "AF3"
);

matrix_array_filter(filter = "Q1", error_message = "");