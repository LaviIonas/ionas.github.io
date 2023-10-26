// Get the navigation bar element
const navbar = document.getElementById("navbar");

// Get the initial position of the navigation bar
const navbarTop = navbar.offsetTop;

// Function to make the navigation bar sticky
function stickyNavbar() {
    if (window.pageYOffset >= navbarTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Add a scroll event listener to call the stickyNavbar function
window.addEventListener("scroll", stickyNavbar);
