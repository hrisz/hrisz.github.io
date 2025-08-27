AOS.init(
    {
        easing: 'ease-out-back',
		duration: 1000,
        mirror: true,
    }
);

AOS.refresh();

const navbar = document.getElementById("main-nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        navbar.classList.add("bg-black/60", "backdrop-blur-lg");
    } else {
        navbar.classList.remove("bg-black/60", "backdrop-blur-lg");
    }
});

