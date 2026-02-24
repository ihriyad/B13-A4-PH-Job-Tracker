// not applied btn status set up on card
function setStatus(type, clickedBtn) {
  let card = clickedBtn.closest(".job-card");
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
interviewBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    setStatus("interview", btn);
  });
});

const rejectedBtn = document.querySelectorAll(".btn-rejected");
rejectedBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    setStatus("rejected", btn);
  });
});
