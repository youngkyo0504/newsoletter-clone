import subscribeAPI from "./subscribeAPI.js";
// preload
function preloadImages(imagesURLs) {
  imagesURLs.forEach((url) => {
    const image = new Image();
    console.log(location.origin);
    image.src = window.location.origin + url;
  });
}
// component open/close 메서드
function showComponent(className, element) {
  if (element) {
    const showComponent = element.querySelector(className);
    showComponent.hidden = false;
    return;
  }
  const showComponent = document.querySelector(className);
  showComponent.hidden = false;
}

function hideComponent(className, element) {
  if (element) {
    const showComponent = element.querySelector(className);
    showComponent.hidden = true;
    return;
  }
  const overlay = document.querySelector(className);
  overlay.hidden = true;
}

function makeCloseBtn(btnCloseClassName, componentName) {
  const closeBtn = document.querySelector(btnCloseClassName);
  closeBtn.addEventListener("click", () => {
    hideComponent(componentName);
  });
}

function makeSubScribeForm(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    subscribeNewso(e, form);
  });
}
function makeOpenBtn(btnName, openComponentName) {
  const btns = document.querySelectorAll(btnName);
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      showComponent(openComponentName);
    });
  });
}
function hideSubscribeResult(resultMessage) {
  const errorMessageContainers = resultMessage.querySelectorAll(
    ".error-text-container"
  );
  errorMessageContainers.forEach((container) => {
    container.style.display = "none";
  });
}

// 구독 메서드
function getUser(form) {
  const email = form.querySelector(".js-email-input");
  const name = form.querySelector(".js-name-input");
  const user = { email: email.value, name: name.value };
  return user;
}

// mainsubscribe 함수
async function subscribeNewso(e, form) {
  e.preventDefault();
  showComponent(".loading-sppiner", form);
  // 메세지 지우고 시작
  const resultMessage = form.querySelector(".result-message");
  hideSubscribeResult(resultMessage);
  const user = getUser(form);
  const result = await subscribeAPI.addSubscriber(user);
  // 메세지 보여주기
  hideComponent(".loading-sppiner", form);
  showSubscribeResult(result, resultMessage, user);
}

function showSubscribeResult(result, resultMessage) {
  const success = resultMessage.querySelector(".success");
  const fail = resultMessage.querySelector(".fail");

  const getMessageByResult = {
    update: {
      status: success,
      text: "입력하신 이메일 주소로 확인 메일을 보내드렸습니다.",
    },
    success: {
      status: success,
      text: "입력하신 이메일 주소로 확인 메일을 보내드렸습니다.",
    },
    failExistEmail: { status: fail, text: "이미 구독 중인 이메일 주소입니다." },
    failUnknown: {
      status: fail,
      text: "이런, 뭔가 잘못된 것 같습니다. 입력한 값을 다시 확인하세요.",
    },
    default: { status: fail, text: "이메일을 확인해주세요" },
  };

  const message = getMessageByResult[result] || getMessageByResult["default"];
  showText(message);
}

function showText({ status, text }) {
  const messageElement = status.querySelector(".result-message-text");
  messageElement.innerText = text;
  status.style.display = "flex";
}

// 실제 동작 함수
const imagesUrls = [
  "/assets/images/color-icons/bn-hover-insta@2x.png",
  "/assets/images/color-icons/bn-hover-facebook@2x.png",
  "/assets/images/color-icons/bn-hover-data@2x.png",
  "/assets/images/color-icons/bn-hover-kakaotalk@2x.png",
  "/assets/images/color-icons/bn-hover-mail@2x.png",
];

preloadImages(imagesUrls);
makeOpenBtn(".js-subscribe-open-btn", ".overlay-subscribe");
makeOpenBtn(".js-policy-open-btn", ".overlay-policy");
makeOpenBtn(".mo-menu-btn", ".mo-menu-overlay");

makeCloseBtn(".modal-exit", ".overlay-subscribe");
makeCloseBtn(".mo-menu-modal-exit", ".mo-menu-overlay");
makeCloseBtn(".modal-policy-exit", ".overlay-policy");

const subscribe_forms = document.querySelectorAll(".js-subscribe-form");
subscribe_forms.forEach((form) => {
  makeSubScribeForm(form);
});
