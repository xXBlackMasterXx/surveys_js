function numeric_validation(question_code, min_val, max_val, max_length) {
    var input_group = document.querySelector(".card :not(#p_NV_1)").nextElementSibling;
    var user_input = document.querySelector(".custom-text:is(#p_" + question_code + "_1)");
    user_input.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');

        question = document.querySelector("#p_" + question_code + "_1");
        feedback = document.querySelector("#feedback_" + question_code);

        if (feedback != null) {
            feedback.remove();
            question.classList.remove("is-invalid");
        }

        if (e.target.value != "") {
            if (e.target.value.length > max_length) {
                e.target.value = e.target.value.slice(0, max_length);
            }

            if (e.target.value < min_val) {
                question.classList.add("is-invalid");
                input_group.insertAdjacentHTML(
                    "beforebegin",
                    `<span class="d-block custom-error pb-1 text-center" id="feedback_` + question_code + `">
                    <span class="form-error-message text-danger">The number can't be lesser than ` + min_val + `</span></span>`
                );
            } else if (e.target.value > max_val) {
                question.classList.add("is-invalid");
                input_group.insertAdjacentHTML(
                    "beforebegin",
                    `<span class="d-block custom-error pb-1 text-center" id="feedback_` + question_code + `"><span class="form-error-message text-danger">The number can't be greather than ` + max_val + `</span></span>`);
            }
        } else {
            question.classList.add("is-invalid");
            input_group.insertAdjacentHTML(
                "beforebegin",
                `<span class="d-block custom-error pb-1 text-center" id="feedback_` + question_code + `"><span class="form-error-message text-danger">This field can't be blank</span>
                </span>`
            );
        }
    })

    document.querySelector("#p_next").addEventListener("click", (e) => {
        if (Number(user_input.value) < min_val || Number(user_input.value > max_val)) {
            e.preventDefault();
            document.querySelector("#p_" + question_code + "_1").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
    })
}

numeric_validation(
    question_code = "NV",
    min_val = 18,
    max_val = 65,
    max_length = 2
);