import subscribeAPI from "./subscribeAPI.js";
function showSubscribeForm(className) {
  const overlay = document.querySelector(className);
  overlay.hidden = false;
}

function closeSubscribeForm(className) {
  const overlay = document.querySelector(className);
  overlay.hidden = true;
}

function makeCloseBtn(btnCloseClassName, componentName) {
  const closeBtn = document.querySelector(btnCloseClassName);
  closeBtn.addEventListener("click", () => {
    closeSubscribeForm(componentName);
  });
}

function makeSubScribeForm(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    subscribeNewso(e, form);
  });
}

// subscribe btn을 누르면 subscription 폼이 나타나다. 밑 버튼과 위 버튼
const subscribe_btns = document.querySelectorAll(".js-subscribe-btn"); // 진짜 subscribe 하는 것이 아니니까 이름 바꿔야함
subscribe_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showSubscribeForm(".overlay-subscribe");
  });
});
const policy_open_btns = document.querySelectorAll(".js-policy-open-btn"); // 진짜 subscribe 하는 것이 아니니까 이름 바꿔야함
policy_open_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showSubscribeForm(".overlay-policy");
  });
});
const moMenutn = document.querySelector(".mo-menu-btn");
moMenutn.addEventListener("click", () => {
  showSubscribeForm(".mo-menu-overlay");
});

makeCloseBtn(".modal-exit", ".overlay-subscribe");
makeCloseBtn(".mo-menu-modal-exit", ".mo-menu-overlay");
makeCloseBtn(".modal-policy-exit", ".overlay-policy");
const subscribe_forms = document.querySelectorAll(".js-subscribe-form");
subscribe_forms.forEach((form) => {
  makeSubScribeForm(form);
});

// 구독 메서드

function getUser(form) {
  const email = form.querySelector(".js-email-input");
  const name = form.querySelector(".js-name-input");
  const user = { email: email.value, name: name.value };
  return user;
}

// main subscribe 함수
async function subscribeNewso(e, form) {
  e.preventDefault();
  const resultMessage = form.querySelector(".result-message");
  const errorMessageContainers = resultMessage.querySelectorAll(
    ".error-text-container"
  );
  errorMessageContainers.forEach((container) => {
    container.style.display = "none";
  });

  // error 메시지 초기화
  const user = getUser(form);
  // 1. email, name value 초기화
  // email.value = "";
  // name.value = "";
  const result = await subscribeAPI.addSubscriber(user);
  showSubscribeResult(result, resultMessage, user);
}

function showSubscribeResult(result, resultMessage) {
  const success = resultMessage.querySelector(".success");
  const fail = resultMessage.querySelector(".fail");

  const getMessageByResult = {
    "update": { status: success, text: "입력하신 이메일 주소로 확인 메일을 보내드렸습니다." },
    "success": { status: success, text: "입력하신 이메일 주소로 확인 메일을 보내드렸습니다." },
    "failExistEmail": { status: fail, text: "이미 구독 중인 이메일 주소입니다." },
    "failUnknown": { status: fail, text: "이런, 뭔가 잘못된 것 같습니다. 입력한 값을 다시 확인하세요." },
    "default": { status: fail, text: "이메일을 확인해주세요" },
  }

  const message = getMessageByResult[result] || getMessageByResult['default']
  showText(message)
}

function showText({ status, text }) {
  const messageElement = status.querySelector('.result-message-text')
  messageElement.innerText = text
  status.style.display = "flex";
}
