//Programa que realiza la animacion del carrousel

//Inicializa el indice del slide
var slideIndex = 1;
//Muestra el slide
showDivs(slideIndex);

//Funcion que cambia el slide sumando 
function plusDivs(n) {
    showDivs(slideIndex += n);
}

//Funcion que cambia el slide segun el indice
function currentDiv(n) {
    showDivs(slideIndex = n);
}

//Funcion que muestra el slide segun el indice
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("horus-container__carousel-img");
    var dots = document.getElementsByClassName("horus-container__carousel-indicator-dot");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //Muestra el slide segun el indice
    //Si este esta en block, o active 
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}