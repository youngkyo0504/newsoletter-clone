import stibeeAPI from "./stibee-api.js";

function showSubscribeForm(className) {
  const overlay = document.querySelector(className);
  console.log(overlay);
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

async function subscribeNewso(e, form) {
  e.preventDefault();
  const email = form.querySelector(".js-email-input");
  const name = form.querySelector(".js-name-input");
  console.log(email.value, name.value);
  const user = { email: email.value, name: name.value };
  // 1. email, name value 초기화
  // email.value = "";
  // name.value = "";

  const result = await stibeeAPI.addSubscriber(user);
  console.log(result);
  // result에 따라서 값이 달라져야한다.

  // Fail
  // 이미 구독 중인 이메일 주소입니다.구독 정보 변경하기
  // 이런, 뭔가 잘못된 것 같습니다. 입력한 값을 다시 확인하세요.

  // Success
  // 입력하신 이메일 주소(keumky23@gmail.com)로 확인 메일을 보내드렸습니다.

  // 1. 오류가 있으면 오류 메세지를 보여주고
  // 2. 오류가 없다면
}

// subscribe btn을 누르면 subscription 폼이 나타나다. 밑 버튼과 위 버튼
const subscribe_btns = document.querySelectorAll(".js-subscribe-btn"); // 진짜 subscribe 하는 것이 아니니까 이름 바꿔야함
subscribe_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showSubscribeForm(".overlay-subscribe");
  });
});

const moMenutn = document.querySelector(".mo-menu-btn");
moMenutn.addEventListener("click", () => {
  showSubscribeForm(".mo-menu-overlay");
});

makeCloseBtn(".modal-exit", ".overlay-subscribe");
makeCloseBtn(".mo-menu-modal-exit", ".mo-menu-overlay");

const subscribe_forms = document.querySelectorAll(".js-subscribe-form");
subscribe_forms.forEach((form) => {
  makeSubScribeForm(form);
});

{
  /* <div class="error-message">
<span class="warning-img">
    <img class="full-size-fit" src="/assets/images//warning/icon-warning@2x.png" alt="">
</span> 
<span>
    이메일 주소를 입력해주세요. 
</span>   
</div> */
}
