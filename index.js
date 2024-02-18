let answers = document.querySelectorAll(".answer");

let showAnswerBtn = document.querySelectorAll(".show-answer-btn");

let userInput = document.querySelectorAll(".user-input");

let btnShowAllAnswers = document.querySelector("#btn-all");



showAnswerBtn.forEach((item) => {

    function changeBtnText(){

        if (item.textContent == "Show") {
            item.textContent = "Hide";
          } else {
            item.textContent = "Show";
          }
    }

  item.addEventListener("click", (e) => {

    item.parentElement.parentElement.lastElementChild.classList.toggle("show");
    changeBtnText()
  });

  
    
  btnShowAllAnswers.addEventListener("click", (e) => {
    item.parentElement.parentElement.lastElementChild.classList.toggle("show");
    changeBtnText()
        if (btnShowAllAnswers.textContent == "Show Answers") {
            btnShowAllAnswers.textContent = "Hide Answers";
            

          } else {
            btnShowAllAnswers.textContent = "Show Answers";
           
          }
          
          
          
          
  });

  
});

