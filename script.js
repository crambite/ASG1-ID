const menuToggle = document.getElementById('menu-toggle');
const menuClose  = document.getElementById('menu-close');
const sideMenu   = document.getElementById('side-menu');
const scrollTop = document.getElementById('scroll-top');

menuToggle.addEventListener('click', function() {
    sideMenu.classList.add('open');
});

menuClose.addEventListener('click', function() {
    sideMenu.classList.remove('open');
});

window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTop.style.display = "block";
        } else {
            scrollTop.style.display = "none";
        }
    });

scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
