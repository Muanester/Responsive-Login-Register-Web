const login = document.querySelector(".login-link");
const register = document.querySelector(".register-link");
const inputPage = document.querySelectorAll(".input-page");
const wraper = document.querySelector(".wraper");
const closeContainer = document.querySelector(".close-container");
const loginBtn = document.querySelector(".login-btn");

function registerFunc() {
  wraper.classList.add("wraper-new-height");
  inputPage.forEach((input) => {
    input.classList.add("toggle-pages");
  });
}
register.addEventListener("click", () => {
  registerFunc();
});

function loginFunc() {
  wraper.classList.remove("wraper-new-height");
  inputPage.forEach((input) => {
    input.classList.remove("toggle-pages");
  });
}
login.addEventListener("click", () => {
  loginFunc();
});

closeContainer.addEventListener("click", () => {
  wraper.classList.remove("wraper-scale");
});

loginBtn.addEventListener("click", () => {
  wraper.classList.add("wraper-scale");
  loginFunc();
});
