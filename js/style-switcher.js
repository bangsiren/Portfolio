// =============toggle style switcher ===========
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open")
});
// hide style switch on scroll
window.addEventListener("scroll", ()=>{
   if(document.querySelector(".sytle-switcher").classList.contains("open")) {
    document.querySelector(".tyle-switcher").classList.remove("open");
   }
});

// ============= theme color ===========
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style)=>{
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

//================= Typing Animation=============
var typed = new Typed(".typing", {
    strings:["","Web Designer", "Web Developer", "Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

// ============= theme light and dark mode ===========

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", ()=> {
    if(document.body.classList.contains(dark)) {
        dayNight.querySelector("i").classList.add("fa-sun"); 
    } else {
        dayNight.querySelector("i").classList.add("fa-moon")
    } 
})
