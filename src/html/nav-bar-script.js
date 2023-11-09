window.onscroll = function() {
    shrinkNavbar();
};

function shrinkNavbar() {
    const navbar = document.getElementById("navbar");
    const home = document.getElementById("home"); 
    const about = document.getElementById("about"); 
    const service = document.getElementById("service"); 
    const contact = document.getElementById("contact"); 

    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        navbar.style.padding = "5px 0"; /* Adjust padding as needed */
        home.style.color = "#fff"
        about.style.color = "#fff"
        service.style.color = "#fff"
        contact.style.color = "#fff"
    } else {
        navbar.style.padding = "10px"; /* Restore the original padding */
        home.style.color = "#35b9ab"
        about.style.color = "#35b9ab"
        service.style.color = "#35b9ab"
        contact.style.color = "#35b9ab"
    }
}