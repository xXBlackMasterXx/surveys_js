function add_label(question_code, type = "prefix"){
	label = document.querySelector(".card:not(#p_" + question_code + "_1) > label");
	label_text = label.innerText;
	label.remove();

	input = document.querySelector("#p_" + question_code + "_1");
	container = document.querySelector(".card:not(#p_" + question_code + "_1)");
	
	if(type == "suffix") {
		wrapper = `
			<div class="input-group">
				` + input.outerHTML + `
				<div class="input-group-append">
					<span class="input-group-text" style="margin-top: 15px">` + label_text + `</span>
				</div>
			</div>
		`
	} else if(type == "prefix") {
		wrapper = `
		<div class="input-group">
			<div class="input-group-prepend">
				<span class="input-group-text" style="margin-top: 15px">` + label_text + `</span>
			</div>
			` + input.outerHTML + `
		</div>
		`
	}

	input.remove();
	container.innerHTML += wrapper;
}

add_label(question_code = "NV", type = "prefix");