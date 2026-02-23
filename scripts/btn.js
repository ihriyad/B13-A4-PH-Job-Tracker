//add style to all, interview , reject button.
const buttons = document.querySelectorAll(".btn");
// console.log(buttons)
buttons.forEach(function (button) {
  // console.log(button)
  button.addEventListener("click", function () {
    buttons.forEach(function (btn) {
      // console.log(btn)
      btn.classList.remove("active");
    });
    button.classList.add("active");
  });
});

// set status
// function setStatus(type) {
//   let badge = document.querySelector(".btn-not-applied");
//   if (type === "interview") {
//       badge.textContent = "INTERVIEW";
//       badge.style.background = "#dcfce7";
//       badge.style.color = "#16a34a";
//       badge.classList.add("badge");
//     }
//     if (type === "rejected") {
//       badge.textContent = "REJECTED";
//       badge.style.background = "#fee2e2";
//       badge.style.color = "#dc2626";
//       badge.classList.add("badge");
//     }
// }
// const interviewBtn = document.querySelectorAll(".btn-interview");
// interviewBtn.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     console.log(btn);
//     setStatus("interview");
//   });
// });
// const rejectedBtn = document.querySelectorAll(".btn-rejected");
// rejectedBtn.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     console.log(btn);
//     setStatus("rejected");
//   });
// });

function setStatus(type, clickedBtn) {
  let card = clickedBtn.closest(".job-card");
  // console.log(card);
  let badge = card.querySelector(".btn-not-applied");

  if (type === "interview") {
    badge.textContent = "INTERVIEW";
    badge.style.background = "#dcfce7";
    badge.style.color = "#16a34a";
    badge.classList.add("badge");
  }
  if (type === "rejected") {
    badge.textContent = "REJECTED";
    badge.style.background = "#fee2e2";
    badge.style.color = "#dc2626";
    badge.classList.add("badge");
  }
}
const interviewBtn = document.querySelectorAll(".btn-interview");
// console.log(interviewBtn);
interviewBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(btn);
    setStatus("interview", btn);
  });
});
const rejectedBtn = document.querySelectorAll(".btn-rejected");
// console.log(rejectedBtn);
rejectedBtn.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener("click", function () {
    // console.log("i am clicked");
    setStatus("rejected", btn);
  });
});
