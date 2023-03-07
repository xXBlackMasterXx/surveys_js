function toggle_visibility(question_code, filter, answers) {
    // Hides the question card at start
    var question_container = document.querySelector(".card :is([id *= p_" + question_code + "]").parentElement
    question_container.style.display = "none"

    // Filter options
    var filter_container = document.querySelector(".card :is([id *= p_" + filter + "]")
    var toggle

    function count_checked() {
        toggle = 0;
        filter_container.querySelectorAll(".form-check > input").forEach((option, index) => {
            if (option.checked == true) {
                if (answers.includes(index)) {
                    toggle++
                }
            }
        })
    
        if (toggle > 0) {
            question_container.style.display = "flex"
        } else {
            question_container.style.display = "none"
            question_container.querySelectorAll(".form-check > input").forEach((option) => {
                option.checked = false;
            })
        }
    }

    window.addEventListener("load", count_checked)
    filter_container.addEventListener("change", count_checked)

    document.querySelector("#p_next").addEventListener("click", (e) => {
        target_question = document.querySelector("#p_" + question_code)
        var visibility = question_container.style.display;
        var n_checked = question_container.querySelectorAll(".form-check > input:checked").length

        if(visibility == "flex" && n_checked == 0) {
            console.log("Prevenir recarga!")
            e.preventDefault();

            feedback = document.querySelector("#feedback_" + question_code);
        
            if(feedback != null){
                feedback.remove();
            }

            target_question.insertAdjacentHTML(
                "beforebegin",
                `<span class="d-block custom-error pb-1 text-center" id="feedback_` + question_code + `">
                <span class="form-error-message text-danger">Please answer this question
                </span></span>`
            );

            target_question.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    })
}

toggle_visibility(question_code = "V2", filter = "V1", answers = [1])

toggle_visibility(
    question_code = "Q2", 
    filter = "Q1",
    answers = [0]
)