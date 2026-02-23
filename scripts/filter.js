// const interviewCount = document.querySelectorAll(".btn-interview");
// // console.log(interviewCount);
// interviewCount.forEach((btn) => {
//   let count = 0;
//   btn.addEventListener("click", function () {
//     count++;
//     // console.log(count)
//     if (count > 1) {
//       return;
//     }
//     document.getElementById("interview-count").innerText = count;
//   });
// });
// const rejectCount = document.querySelectorAll(".btn-rejected");
// // console.log(rejectedBtn)
// rejectCount.forEach((btn) => {
//   let count = 0;
//   btn.addEventListener("click", function () {
//     count++;
//     // console.log(count)
//     document.getElementById("rejected-count").innerText = count;
//   });
// });
// const cards = document.querySelectorAll(".job-card");
// // console.log(cards);
// let interviewCount = 0;
// let rejectCount = 0;

// cards.forEach((card) => {
//   //   console.log(card)
//   let cardState = "";
//   const interviewBtn = card.querySelector(".btn-interview");
//   const rejectedBtn = card.querySelector(".btn-rejected");
//   // console.log(interviewBtn)
//   interviewBtn.addEventListener("click", function () {
//     if (cardState === "interview") {
//       return;
//     }
//     if (cardState === "rejected") {
//       rejectCount--;
//     }

//     cardState = "interview";
//     interviewCount++;

//     document.getElementById("interview-count").innerText = interviewCount;
//     document.getElementById("rejected-count").innerText = rejectCount;
//   });
//   rejectedBtn.addEventListener("click", function () {
//     if (cardState === "rejected") {
//       return;
//     }
//     if (cardState === "interview") {
//       interviewCount--;
//     }
//     cardState = "rejected";
//     rejectCount++;

//     document.getElementById("interview-count").innerText = interviewCount;
//     document.getElementById("rejected-count").innerText = rejectCount;
//   });
// });
