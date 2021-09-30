import stibeeAPI from "./stibee-api.js";

const subscribe_btns = document.querySelectorAll(".js-subscribe-btn"); // 진짜 subscribe 하는 것이 아니니까 이름 바꿔야함
subscribe_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showSubscribeForm(".overlay-subscribe");
  });
});

function showSubscribeForm(className) {
  const overlay = document.querySelector(className);
  console.log(overlay);
  overlay.hidden = false;
}
function closeSubscribeForm(className) {
  const overlay = document.querySelector(className);
  overlay.hidden = true;
}
const closeBtn = document.querySelector(".modal-exit");
closeBtn.addEventListener("click", () => {
  closeSubscribeForm(".overlay-subscribe");
});

const moMenutn = document.querySelector(".mo-menu-btn");
moMenutn.addEventListener("click", () => {
  showSubscribeForm(".mo-menu-overlay");
});

function makeCloseBtn(btnCloseClassName, componentName) {
  const closeBtn = document.querySelector(btnCloseClassName);
  closeBtn.addEventListener("click", () => {
    closeSubscribeForm(componentName);
  });
}

makeCloseBtn(".mo-menu-modal-exit", ".mo-menu-overlay");

async function subscribeNewso(e, form) {
  e.preventDefault();
  const email = form.querySelector(".js-email-input");
  const name = form.querySelector(".js-name-input");
  console.log(email.value, name.value);
  const user = { email: email.value, name: name.value };
  const result = await stibeeAPI.addSubscriber(user);
  console.log(result);
}

function makeSubScribeForm(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    subscribeNewso(e, form);
  });
}

const subscribe_forms = document.querySelectorAll(".js-subscribe-form");
subscribe_forms.forEach((form) => {
  makeSubScribeForm(form);
});
