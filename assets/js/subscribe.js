const subscribe_btns = document.querySelectorAll(".js-subscribe-btn")
subscribe_btns.forEach((btn) => {
    btn.addEventListener("click", ()=>{showSubscribeForm(".overlay-subscribe")})
})

function showSubscribeForm(className) {
    const overlay = document.querySelector(className);
    console.log(overlay)
    overlay.hidden = false;
}
function closeSubscribeForm(className){
    const overlay = document.querySelector(className);
    overlay.hidden =true;
}
const closeBtn = document.querySelector(".modal-exit")
closeBtn.addEventListener("click",()=>{closeSubscribeForm(".overlay-subscribe")})

const moMenutn = document.querySelector(".mo-menu-btn");
moMenutn.addEventListener('click',()=>{
    showSubscribeForm(".mo-menu-overlay")
})

function makeCloseBtn(btnCloseClassName, componentName){
    const closeBtn = document.querySelector(btnCloseClassName)
    closeBtn.addEventListener("click",()=>{closeSubscribeForm(componentName)})
}


makeCloseBtn(".mo-menu-modal-exit",".mo-menu-overlay")