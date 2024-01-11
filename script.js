function navBarChange() {
    var nav = document.getElementById("nav");
    var main = document.getElementById("main");
    let scrollNum = main.offsetTop;

    if (scrollNum - window.scrollY <= 60) {
        nav.style.backgroundColor = "rgb(39,144,191)";
    } else {
        nav.style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
    console.log(window.scrollY);
}





function produktSlide(val) {

    var slide1 = document.getElementById("produktSlide1");
    var slide2 = document.getElementById("produktSlide2");
    var slide3 = document.getElementById("produktSlide3");
    var slide4 = document.getElementById("produktSlide4");
    var slide5 = document.getElementById("produktSlide5");
    var slide6 = document.getElementById("produktSlide6");

    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "none";
    slide4.style.display = "none";
    slide5.style.display = "none";
    slide6.style.display = "none";

    if (val == 1) {
        slide1.style.display = "block";
    } else if (val == 2) {
        slide2.style.display = "block";
    } else if (val == 3) {
        slide3.style.display = "block";
    } else if (val == 4) {
        slide4.style.display = "block";
    } else if (val == 5) {
        slide5.style.display = "block";
    } else if (val == 6) {
        slide6.style.display = "block";
    }

}



function submitRequest() {
    const content = 'Hello, this is the content.';
    const blob = new Blob([content], { type: 'text/plain' });

    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'example.txt';
    a.textContent = 'Download example.txt';



}

let slide = 1;


function slideShowPluss() {

    if (slide == 4) {
        slide = 1;
    } else {
        slide++;
    }

    var slide1 = document.getElementById('slide1');
    var slide2 = document.getElementById('slide2');
    var slide3 = document.getElementById('slide3');
    var slide4 = document.getElementById('slide4');

    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "none";
    slide4.style.display = "none";





    if (slide == 1) {
        slide1.style.display = "flex";
    } else if (slide == 2) {
        slide2.style.display = "flex";
    } else if (slide == 3) {
        slide3.style.display = "flex";
    } else if (slide == 4) {
        slide4.style.display = "flex";
    }




}

function slideShowMinus() {

    if (slide == 1) {
        slide = 4;
    } else {
        slide--;
    }

    var slide1 = document.getElementById('slide1');
    var slide2 = document.getElementById('slide2');
    var slide3 = document.getElementById('slide3');
    var slide4 = document.getElementById('slide4');

    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "none";
    slide4.style.display = "none";






    if (slide == 1) {
        slide1.style.display = "flex";
    } else if (slide == 2) {
        slide2.style.display = "flex";
    } else if (slide == 3) {
        slide3.style.display = "flex";
    } else if (slide == 4) {
        slide4.style.display = "flex";
    }




}

let form = document.getElementById("form");

//form.addEventListener("submit", (e) => {
//e.preventDefault();
function user() {
    var fnamn = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    console.log(fnamn + lname + email);






}




//});

function tack() {
    alert("Allt lyckades du kommer nu få ett mail när vi lanserar. Tack!!! ");

}