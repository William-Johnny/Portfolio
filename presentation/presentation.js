let mainDiv=document.getElementById("main");                                                                                                                     
for (let i =0; i<10; i++){                                                                
    mainDiv.innerHTML += `<div class="miniature" id="${i}"></div>`;       
}

const divDecoration = (nb,img,def,link,projPerso="")=>{
    let div = document.getElementById(nb);
    div.innerHTML += `<a href=${link}><img src=${img}></a>`;
    div.innerHTML += `<a href=${link} id="test"><div id="textDiv"><p>${def}</p><p>${projPerso}</p></div></a>`
}

divDecoration("0","../img/jsp1.png","JSP DE FRANCE","../detail_pages/jsp.html","projet personnel");

divDecoration("1","../img/alien.png","C.O.P.S","../detail_pages/cops.html");
divDecoration("2","../img/paco.png","P.A.C.O","../detail_pages/paco.html","projet personnel");

divDecoration("3","../img/cap.png","HEADWEAR","../detail_pages/headwear.html");
divDecoration("4","../img/py1.png","PYGAMON","../detail_pages/pygamon.html","projet personnel");

divDecoration("6","../img/lost.png","LOST","../detail_pages/lost.html");
divDecoration("5","../img/recipy.png","RECETTE","../detail_pages/recipy.html");

divDecoration("7","../img/hit.png","HIT GAME","../detail_pages/hitGame.html");
divDecoration("8","../img/hide_and_seek.png","HIDE & SEEK","../detail_pages/hide&seek.html");

divDecoration("9","../img/movie1.png","BIBLIOTHEQUE DE FILMS","../detail_pages/movie.html");






var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}
