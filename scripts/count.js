//count interview or reject
function initCard(card) {
  let cardState = "";

  const interviewBtn = card.querySelector(".btn-interview");
  const rejectedBtn = card.querySelector(".btn-rejected");
  const deleteBtn = card.querySelector(".delete-btn");

  interviewBtn.addEventListener("click", function () {
    if (cardState === "interview") {
      return;
    }

    if (cardState === "rejected") {
      rejectCount--;
    }

    cardState = "interview";
    interviewCount++;
    updateDashB();
  });

  rejectedBtn.addEventListener("click", function () {
    if (cardState === "rejected") {
      return;
    }

    if (cardState === "interview") {
      interviewCount--;
    }

    cardState = "rejected";
    rejectCount++;
    updateDashB();
  });
  //delete btn set up
  deleteBtn.addEventListener("click", function () {
    if (cardState === "interview") {
      interviewCount--;
    }
    if (cardState === "rejected") {
      rejectCount--;
    }

    card.remove();
    filerCards(currentTab);
    totalCount();
    updateDashB();
  });
}
