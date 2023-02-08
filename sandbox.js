answers = {}

response.answers.forEach((answer) => {
    if(answer.pageCode == "ParentConsent" && answer.questionCode == "PGT_4") {
        answers[questionCode] = answer.code
    }
})

if(answer["PGT_4"] == "1"){
    document.querySelectorAll(".form-check > input")[0].click
}

else {
    document.querySelectorAll(".form-check > input")[1].click
}
