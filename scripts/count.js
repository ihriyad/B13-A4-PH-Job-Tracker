// // count total cards
// const dashBoardTotal = document.getElementById("dashboard-total");
// const availableJobTotal = document.getElementById("available-job-total");
// // console.log(availableJobTotal)
// // console.log(dashBoardTotal)
// function updateCount() {
//   const allCards = document.querySelectorAll(".job-card");
//   const noJob = document.getElementById("no-job");
//   // console.log(allCards);
//   dashBoardTotal.innerText = allCards.length;
//   availableJobTotal.innerText = allCards.length;
//   //show no-job card
//   if (allCards.length === 0) {
//     noJob.classList.remove("hidden");
//   } else {
//     noJob.classList.add("hidden");
//   }
// }
// updateCount();
// const deleteButtons = document.querySelectorAll(".delete-btn");
// deleteButtons.forEach((btn) => {
//   //   console.log(btn);
//   btn.addEventListener("click", function () {
//     const card = btn.closest(".job-card");
//     // console.log(card)
//     card.remove();

//     updateCount();
//   });
// });
