function add_label(question_code){
	label = document.querySelector(".question.card:has(#p_"+question_code+"_1) > label");
	label_text = label.innerText;
	label.remove();

	input = document.querySelector("#p_"+question_code+"_1");
	container = document.querySelector(".question.card:has(#p_" + question_code + "_1)")
	
	
	wrapper = `
		<div class="input-group">
			` + input.outerHTML + `
			<div class="input-group-append">
				<span class="input-group-text" style="margin-top: 15px">` + label_text + `</span>
			</div>
		</div>
	`
	input.remove();

	container.innerHTML += wrapper;
}

add_label("Q1")