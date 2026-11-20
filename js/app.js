let bars = document.querySelector(".bars")

let restNav = document.querySelector(".RestNav")

bars.addEventListener("click", ()=> {
    restNav.classList.toggle('active')
})