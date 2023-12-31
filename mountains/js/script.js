function menu_open() {
    var mobile_menu = document.getElementById("mobile-menu");
    this.classList.toggle("active");
    mobile_menu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
}

var menu_button = document.getElementById("toggle-mobile-menu");
menu_button.addEventListener("click", menu_open);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});