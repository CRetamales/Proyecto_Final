//Programa que toma la clase navbar y si el usuario hace scroll hacia abajo hasta cierta altura, se le pone 
// un estilo de fondo de color negro

//Se obtiene la clase navbar
var navbar = document.getElementsByClassName("navbar")[0];
//Se obtiene la clase navbar-nav
var navbarNav = document.getElementsByClassName("navbar-nav")[0];
//Se obtiene el tamaño de la pantalla
var width = window.innerWidth;


//Se hace una funcion que se ejecuta cuando el usuario hace scroll
window.onscroll = function() {
    
        //Se obtiene la posicion del scroll
        var scroll = document.documentElement.scrollTop || document.body.scrollTop;
        //y el tamaño de la pantalla
        var width = window.innerWidth;
        //Si el tamaño de la pantalla es menor a 768px, el scroll es mayor a 200, el navbar se cambia background-color: #0F110C;
        if (width < 768) {
            if (scroll > 200) {
                navbar.style.backgroundColor = "#221D23";
                navbarNav.style.backgroundColor = "#221D23";
            }
            else {
                navbar.style.backgroundColor = "transparent";
                navbarNav.style.backgroundColor = "transparent";
            }
        }
        if (width > 768) {
            if (scroll > 550) {
                navbar.style.backgroundColor = "#221D23";
                navbarNav.style.backgroundColor = "#221D23";
            }
            else {
                navbar.style.backgroundColor = "transparent";
                navbarNav.style.backgroundColor = "transparent";
            }
        }
        

}



