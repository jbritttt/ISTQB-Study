let answers = document.querySelectorAll(".answer");

let showAnswerBtn = document.querySelectorAll(".show-answer-btn");

let userInput = document.querySelectorAll(".user-input");

let btnAll = document.querySelector("#btn-all");

answers.forEach((item) => {
  btnAll.addEventListener("click", (e) => {
    item.classList.toggle("show");
    
  });
});

showAnswerBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.nextElementSibling.classList.toggle("show");

    if (item.textContent == "Show") {
      item.textContent = "Hide";
    } else {
      item.textContent = "Show";
    }
  });
});
