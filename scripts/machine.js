function updateDashB() {
  document.getElementById("interview-count").innerText = interviewCount;
  document.getElementById("rejected-count").innerText = rejectCount;
}

function initCard(card) {
  let cardState = "";

  const interviewBtn = card.querySelector(".btn-interview");
  const rejectedBtn = card.querySelector(".btn-rejected");
  const deleteBtn = card.querySelector(".delete-btn");

  interviewBtn.addEventListener("click", function () {
    if (cardState === "interview") {
        return;
    }

    if (cardState === "rejected"){
         rejectCount--;
    }

    cardState = "interview";
    interviewCount++;
    updateDashB();
  });

  rejectedBtn.addEventListener("click", function () {
    if (cardState === "rejected"){
         return;
    }

    if (cardState === "interview"){
         interviewCount--;
    }

    cardState = "rejected";
    rejectCount++;
    updateDashB();
  });

  deleteBtn.addEventListener("click", function () {
    if (cardState === "interview"){
         interviewCount--;
    }
    if (cardState === "rejected"){
         rejectCount--;
    }

    card.remove();
    totalCount();
    updateDashB();
  });
}