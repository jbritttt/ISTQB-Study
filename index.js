let answers = document.querySelectorAll(".answer");

let showAnswerBtn = document.querySelectorAll(".show-answer-btn");

let userInput = document.querySelectorAll(".user-input");



userInput.forEach((item) => {

    item.addEventListener("click", (e) => {
       
    
       
        
      });
  
});

showAnswerBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.nextElementSibling.classList.toggle("show");

    if(item.textContent == 'Show'){
        item.textContent = 'Hide'

    }else{
        item.textContent = 'Show'

    }
    
  });
});



