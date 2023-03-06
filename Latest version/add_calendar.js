function add_datepicker(question_code, min_date, max_date) {
    // Get the open text where the date will be saved
    input_date = document.querySelector("#p_" + question_code + "_1");
    // The datepicker HTML
    datepicker = `<input class="form-control" type="date" id="datepicker_`+ question_code + `">`;
    // Hide the input_date
    input_date.style.display = "none";
    // Insert the datepicker in the input_date container
    input_date.outerHTML += datepicker;
    
    datepicker = document.querySelector("#datepicker_" + question_code)
    if(input_date.value != "") { 
        datepicker.value = input_date.value;
    }

    if(min_date != null) {
        datepicker.min = min_date;
    }

    if(max_date != null) {
        datepicker.max = max_date;
    }
    
    // Write the selected date whenever datepicker changes
    datepicker.addEventListener("change", (e) => {
        // Get the open text where the date will be saved
        input_date = document.querySelector("#p_" + question_code + "_1");
        // Write the date into the input_date
        input_date.value = e.target.value;
    })
}

// Set the question code of your open text where dates will be saved
add_datepicker(question_code = "Q1")