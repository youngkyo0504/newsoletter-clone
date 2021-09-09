const subscribe_btns = document.querySelectorAll(".js-subscribe-btn")
subscribe_btns.forEach((btn) => {
    btn.addEventListener("click", showSubscribeForm)
})

function showSubscribeForm() {
    const modal = document.querySelector(".overlay")
    modal.hidden = false;
}