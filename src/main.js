// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

//navbar stuff
function openNav() {
    document.getElementById("mySidebar").style.width = "180px";
    document.getElementById("main").style.marginLeft = "180px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


//darkmode - TODO
// function mode() {

//     var element = document.body;

//     if (document.getElementById("switch").innerText = "Light.") {
//         document.getElementById("switch").innerText = "Dark.";
//         element.classList.toggle("darkmode");
//     }
//     else if (document.getElementById("switch").innerText = "Dark.") {
//         document.getElementById("switch").innerText = "Light.";
//         element.classList.toggle("lightmode");
//     }
// }