// Get all the available radio buttons in the page
radio_buttons =  document.querySelectorAll("#p_Q1_3 > div >  input")

// If there is only one radio button
if(radio_buttons.length == 1) {
    // Hides the page
    body = document.querySelector("body").style.display = "none";
    // Click the only button
    radio_buttons[0].click();
    // Get the next button
    movenextbtn = document.querySelector("#p_next")
    // Click it to go to next page or finish the survey
    movenextbtn.click();
}

