//active btn blue color set up
const buttons = document.querySelectorAll(".btn");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  });
});

