window.onscroll = function() {
    shrinkNavbar();
};

function shrinkNavbar() {
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        navbar.style.padding = "5px 0"; /* Adjust padding as needed */
    } else {
        navbar.style.padding = "10px"; /* Restore the original padding */
    }
}