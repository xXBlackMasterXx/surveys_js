function randomize(array, exclude) {
    var i, j, temp;
    if(typeof(exclude) != "undefined") {
        for(i = array.length - 1; i > 0; i--){
            if(!exclude.includes(i)){
                do {
                    j = Math.floor(Math.random() * (i + 1));
                } while(exclude.includes(j));
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    
    else {
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
    
    return array;
}

function shuffle(question_code, groups){
    var container = document.querySelector("#p_" + question_code);
    var array = container.querySelectorAll(".form-check");
    
    randomize_groups = true;
    
    randomized = []
    groups.forEach((group, index) => {
        // console.log("Imprimiendo group", group, index)
        randomized.push(randomize(group))
        // console.log("Grupo randomizado", randomized)
    })
    
    if(randomize_groups == true) {
        randomized = randomize([...randomized])
        // console.log("Randomizado por grupos", randomized)
    }
    
    randomized = randomized.flat()
    // console.log(randomized)
    var j = 0;
    var new_array = [];
    
    for(index=0;index<array.length;index++) {
        if(randomized.includes(index)) {
            new_array.push(randomized[j]);
            j++;
        } 
        
        else {
            new_array.push(index)
        }
    }
    
    new_array.forEach((value) => {
        array[value].remove();
        container.appendChild(array[value])
    })
}
