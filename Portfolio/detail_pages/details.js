/////////////////////////////////////////////////
// Gestion du diaporamma
/////////////////////////////////////////////////

let compteur = 0 
let timer, elements, slides, slideWidth

window.onload = () => {
    const diapo = document.querySelector(".diapo")
    elements = document.querySelector(".elements")

    slides = Array.from(elements.children)
    slideWidth = diapo.getBoundingClientRect().width

    let next = document.querySelector("#nav-droite")
    let prev = document.querySelector("#nav-gauche")
    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)

    timer = setInterval(slideNext, 4000)

    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width
    })
}


function slideNext(){
    compteur++
    if(compteur == slides.length){
        compteur = 0
    }
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}


function slidePrev(){
    compteur--
    if(compteur < 0){
        compteur = slides.length - 1
    }
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

/////////////////////////////////////////////////
// Gestion du menu burger
/////////////////////////////////////////////////

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;


function openNav() {
  sidenav.classList.add("active");
}


function closeNav() {
  sidenav.classList.remove("active");
}

