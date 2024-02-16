let answers = document.querySelectorAll('.answer')

let showAnswerBtn = document.querySelectorAll('.show-answer-btn')

answers.forEach(item => {

    //item.style.display = 'none'


    

})




showAnswerBtn.forEach(item => {

    

    item.addEventListener('click',(e) => {


        item.nextElementSibling.classList.toggle("show")


    
    })
    

})
