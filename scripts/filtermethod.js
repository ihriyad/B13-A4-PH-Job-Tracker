// filer btn cards here 

const cards = document.querySelectorAll(".job-card");
let intBtn = document.querySelectorAll(".btn-interview");
let rejBtn = document.querySelectorAll(".btn-rejected");
let empty = document.getElementById("no-job");
let currentTab = "all";

for (let i = 0; i < intBtn.length; i++) {

  intBtn[i].addEventListener("click", function () {
    cards[i].classList.add("interview");
    cards[i].classList.remove("rejected");
    filerCards(currentTab);
  });
}
for (let i = 0; i < rejBtn.length; i++) {

  rejBtn[i].addEventListener("click", function () {
    cards[i].classList.add("rejected");
    cards[i].classList.remove("interview");
    filerCards(currentTab);
    console.log("I am clicked");
  });
}

//filer function
function filerCards(type) {
  let cards = document.querySelectorAll(".job-card");
  let found = false;
  for (let i = 0; i < cards.length; i++) {
    if (type === "all") {
      cards[i].style.display = "block";
      found = true;
    } else if (cards[i].classList.contains(type)) {
      cards[i].style.display = "block";
      found = true;
    } else {
      cards[i].style.display = "none";
    }
  }
  if (found) {
    empty.style.display = "none";
  } else {
    empty.style.display = "block";
  }
}

//call function
document.getElementById("allBtn").addEventListener("click", function () {
  currentTab = "all";
  filerCards("all");
});

document.getElementById("interviewBtn").addEventListener("click", function () {
  currentTab = "interview";
  filerCards("interview");
});

document.getElementById("rejectedBtn").addEventListener("click", function () {
  currentTab = "rejected";
  filerCards("rejected");
});
