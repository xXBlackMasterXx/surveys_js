// Get the answer options for desktop view
var desktop_answers = document.querySelectorAll("#question4298071 > div > div.question > table > tbody > tr > td.answer > ul > li")

// Get all the answers options for mobile view
var mobile_answers = document.querySelectorAll("#question4298071 > div > div.array_for_mobile > div.array_mobile_question > div.mobile_array")

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

randomize(array = a1, exclude = 0)