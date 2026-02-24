//get total count
const dashBoardTotal = document.getElementById("dashboard-total");
const availableJobTotal = document.getElementById("available-job-total");

let interviewCount = 0;
let rejectCount = 0;

function totalCount() {
  const allCards = document.querySelectorAll(".job-card");
  const noJob = document.getElementById("no-job");

  dashBoardTotal.innerText = allCards.length;
  availableJobTotal.innerText = allCards.length;
  //this hide no-job section
  if (allCards.length === 0) {
    noJob.classList.remove("hidden");
  } else {
    noJob.classList.add("hidden");
  }
}

// update dashboard
function updateDashB() {
  document.getElementById("interview-count").innerText = interviewCount;
  document.getElementById("rejected-count").innerText = rejectCount;
}

document.querySelectorAll(".job-card").forEach(initCard);
totalCount();
