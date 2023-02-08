export function array_filter_matrix(page_code){
    array_filter = [];
    
    response.answers.forEach((answer) => {
      if(answer.pageCode == page_code){
        array_filter.push(Number(answer.code)-1);
      }
    })
    
    rows = document.querySelectorAll("table > tbody > tr")
    
    rows.forEach((row, index) => {
        if(!array_filter.includes(index)){
            row.style.display = "none";
        }
    })
}