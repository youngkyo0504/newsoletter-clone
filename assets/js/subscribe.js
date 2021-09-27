const subscribe_btns = document.querySelectorAll(".js-subscribe-btn")
subscribe_btns.forEach((btn) => {
    btn.addEventListener("click", showSubscribeForm)
})

function showSubscribeForm() {
    const overlay = document.querySelector(".overlay");
    overlay.hidden = false;
}
function closeSubscribeForm(){
    const overlay = document.querySelector(".overlay");
    overlay.hidden =true;
}
const closeBtn = document.querySelector(".modal-exit")
closeBtn.addEventListener("click", closeSubscribeForm)

