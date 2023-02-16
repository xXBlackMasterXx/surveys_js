try {
	var d1 = document.getElementById('answer54264X339583X2980623');
	var makeInp = document.getElementById('answer54264X339583X29806241');
	var modelInp = document.getElementById('answer54264X339583X29806242');
	var yearInp = document.getElementById('answer54264X339583X29806243');
	var triesInp = document.getElementById('answer54264X339583X29806244');
	
	d1.insertAdjacentHTML('afterend', '<button class="button btn-default" id="search"> Lookup reg </button><div id="car_status" aria-live="assertive" aria-atomic="true" role="status" class="sr-only"></div><div id="car_results"></div>');

	// Can modify the below number to increase number of potential tries
	var tries = 3;
	
    document.getElementById("search").addEventListener("click", function(e){
      
      	e.preventDefault();
      	var request;
		
		// Abort any pending request
		if (request) {
			request.abort();
		}
      
        // The field we will use for search term input
        var reg_input = d1;
        
        // A simple status field which we instantly populate with a "loading" message
		var reg_status = document.getElementById("car_status");
		reg_status.textContent = "Searching... please wait";
		
		if(reg_input.value.trim() != null && reg_input.value.trim() != "" && tries != 0){
			
			tries--;
			if(tries == 0){
		    	triesInp.value = "finished";
			}
			
			// Remove spaces from the input
			var reg_clean = reg_input.value.trim().replace(/\s+/g, '');
			
			if(reg_clean == "TEST123"){
				// test entry to avoid live calls to API
				
				reg_status.innerHTML = "<br><strong>Your car:</strong><br>Make: Test Make<br>Model: Test Model<br>Year: 2000";
							
				makeInp.value = "Test Make";
				modelInp.value = "Test Model";
				yearInp.value = "2000";
				
				triesInp.value = "success";
			
			}else{
			
				var request = new XMLHttpRequest();
				request.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						var obj = JSON.parse(this.responseText);
						if(obj['make'] != null && obj['make'] != ''){
							reg_status.innerHTML = "";
							
							reg_status.innerHTML = "<br><strong>Your car:</strong><br>Make: "+obj['make']+"<br>Model: "+obj['model']+"<br>Year: "+obj['yearOfManufacture'];

							makeInp.value = obj['make'] || "";
							modelInp.value = obj['model'] || "";
							yearInp.value = obj['yearOfManufacture'] || "";
							
							triesInp.value = "success";
							
							console.log(obj);
							
							
						}else{
							reg_status.innerHTML = "Registration could not be found. You have "+tries+" attempts remaining.";
						}
					}
				};
				request.open("GET", "https://services.tribepath.co.uk/registration/?reg=" + reg_clean, true);
				request.send();
			}
			
		}else if(tries == 0){
		    reg_status.textContent = "You have exceeded the number of tries.";
		    triesInp.value = "finished";
		}else{
			reg_status.textContent = "Please enter a valid registration";
		}
    });
} catch (e) {
  // this will run only if the code in the try block errors-out
}