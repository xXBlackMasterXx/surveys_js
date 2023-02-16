function matrix_array_filter(filter, type, error_message = "Fill out all the rows with a valid response.") {
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
    displayed_rows = document.querySelectorAll("table > tbody > tr");

    // If after array filter/filter exclusive is a blank page
    if(displayed_rows.length == 0) {
        // Hide the page
        document.querySelector("body").style.display = "none";
        // Go to next page
        document.querySelector("#p_next").click();
    }

    // Check if next button is pressed
    document.querySelector("#p_next").addEventListener("click", (e) => {
        // Flag if row is not responded
        flag = false;

        displayed_rows.forEach((row) => {
            n_checked = 0;
            row.querySelectorAll(".form-check > input").forEach((input) => {
                if(input.checked == true){
                    n_checked++;
                }
            })

            if(n_checked == 0) {
                flag = true;
            }
        })

        if(flag == true) {
            e.preventDefault();
            alert(error_message);
        }
    })
}

matrix_array_filter(filter = "AF1", type = "exclusive")