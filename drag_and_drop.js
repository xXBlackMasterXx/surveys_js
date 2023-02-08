var styles = `
    .custom-question-text {
        text-align: center;
    }
    
    .bucket > p {
        margin-top: 15px;
    }

    .element > p {
        margin: 15px;
    }
    .container {
        text-align: center;    
    }

    .element {
        border: 1px solid lightgray;
        border-radius: 15px;
        width: 200px;
        padding-top: 5px;
        padding-bottom: 5px;
        margin: auto;
        margin-top: 15px;
        transition: 0.2s;
    }

    .element:hover {
        color: green;
        rotate: -7.5deg;
        transition: 0.2s;
        cursor: grab;
    }

    .element.dragging {
        background-color: lightgray;
        box-shadow: 2px 2px rgb(185, 185, 185);
        color: green;
        opacity: 1;
        rotate: -7.5deg;
        cursor: move;
    }

    .bucket {
        border: 2px dashed rgb(185, 185, 185);
        border-radius: 10px;
        width: 300px;
        min-height : 100px !important;
        margin: auto;
        margin-top: 20px;
        padding-bottom: 20px;
    }
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

let user_labels = document.querySelectorAll("form > div.question.card.mb-5.p-5.border-0 > div > div > div > h6")

linear_scales = document.querySelectorAll("body > div > div:nth-child(2) > div > div > form > div.question.card.mb-5.p-5.border-0 > div")
linear_scales.forEach((linear_scale) => {
  linear_scale.style.display = "none"
})

// insert drag&drop UI
document.querySelector(".question").innerHTML += `
    <p class = 'custom-question-text'>Which office is the better?<br><small>(Sort accordingly to your thoughts)</small></p>
    <div class='container'>
        <!-- Container where items are placed -->
        <div class='bucket'>
            <p><small>Drag elements from here</small></p>
            <!-- 
            <div class='element' draggable='true'>
                <p>Syno Vilnius</p>
            </div>
            <div class='element' draggable='true'>
                <p>Syno Cancun</p>
            </div>
            <div class='element' draggable='true'>
                <p>Syno Stockholm</p>
            </div>   
            -->
        </div>

        <!-- Container where items should be dropped -->
        <div class='bucket'>
            <p><small>Drop the elements here</small></p>
        </div>
    </div>
`


user_labels.forEach((label, index) => {
    document.querySelector(".bucket:nth-child(1)").innerHTML += "<div class='element' draggable=true><p>" + label.textContent + "</div>"
})

const buckets = document.querySelectorAll('.bucket')
const elements = document.querySelectorAll('.element')

elements.forEach((element) => {
    element.addEventListener('dragstart', (e) => {
        element.classList.add('dragging')
    })
    
    element.addEventListener('dragend', (e) => {
        element.classList.remove('dragging')
    })

})

buckets.forEach((bucket) => {
    bucket.addEventListener('dragover', (e) => {
        e.preventDefault()
        // console.log("Drag over")
        const afterElement = getDragAfterElement(bucket, e.clientY)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
            console.log(draggable)
            bucket.appendChild(draggable)
        }

        else {
            console.log(draggable)
            bucket.insertBefore(draggable, afterElement)
        }
    })
})

function getDragAfterElement(bucket, y) {
    const draggableElements = [...bucket.querySelectorAll('.element:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return {offset : offset, element : child}
        }
        else {
            return closest
        }
    }, {offset : Number.NEGATIVE_INFINITY}).element
}

let cards;
let background_labels;

let observer = new MutationObserver(() => {

    if(document.querySelector(".bucket:nth-child(2)")) {
        dropped_elements = document.querySelectorAll(".bucket:nth-child(2) > .element > p") 
        dropped_elements = [...dropped_elements]
        
        background_labels = document.querySelectorAll("form > div.question.card.mb-5.p-5.border-0 > div > div > div > h6")
        

        cards = []

        dropped_elements.forEach((item, index) => {
            cards.push({label : item.textContent, position : index})
            console.log(cards)
        })
    }
})

const target = document.querySelector(".bucket:nth-child(2)")
const config = {childList : true}
observer.observe(target, config)

let observerError = new MutationObserver(() => {
    error_message = document.querySelector("body > div > div:nth-child(2) > div > div > form > div.question.card.mb-5.p-5.border-0 > span")
    if(error_message) {
       error_message.remove()
       alert("Please, arrange all the cards from the main container into the second container")
    }
})

const targetError = document.querySelector("body")
const configError = {childList : true}
observerError.observe(targetError, configError)

movenextbtn = document.querySelector('#p_next')
movenextbtn.addEventListener('click', () => {
    cards.forEach((card, card_index) => {
        background_labels.forEach((label, label_index) => {
            if(label.textContent == card["label"]) {
                buttons = document.querySelectorAll("form > div.question.card.mb-5.p-5.border-0 > div:nth-child(" + String(2 + label_index) + ") > div > div > div > div.linear-scale__radio-holder.btn-group.btn-group-toggle > div> label")
                console.log("label: " + label.textContent + " matches to card " + card["label"])
                console.log("form > div.question.card.mb-5.p-5.border-0 > div:nth-child(" + String(2 + label_index) + ") > div > div > div > div.linear-scale__radio-holder.btn-group.btn-group-toggle > div> label")

                buttons[card_index].click();
                return;
            }
        })
    })
})