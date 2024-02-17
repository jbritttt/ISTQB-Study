let answers = document.querySelectorAll(".answer");

let showAnswerBtn = document.querySelectorAll(".show-answer-btn");

let userInput = document.querySelectorAll(".user-input");

let btnShowAllAnswers = document.querySelector("#btn-all");

const hideAnswer = 'Hide Answer'


answers.forEach((item) => {
    
    btnShowAllAnswers.addEventListener("click", (e) => {
    item.classList.toggle("show");
   
  });
});

showAnswerBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.parentElement.parentElement.lastElementChild.classList.toggle("show");

    if (item.textContent == "Show") {
      item.textContent = "Hide";
    } else {
      item.textContent = "Show";
    }
  });
});

