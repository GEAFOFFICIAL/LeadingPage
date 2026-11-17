// ---- Header: sempre no modo azul escuro estático ----
const nav = document.querySelector(".nav");
const logoImg = document.querySelector(".logo-img");

nav.classList.add("scrolled");

// Usa sempre a versão branca do logo
if (logoImg) {
    const logoSrc = logoImg.getAttribute("src");
    logoImg.src = logoSrc.replace(/(Logo GEAF)(\.png)/i, "$1, Branca$2");
}

// ---- Hamburger e Dropdowns Mobile ----
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".ul-nav");
const dropdownLinks = document.querySelectorAll(".has-dropdown > a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".ul-nav a:not(.has-dropdown > a)").forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

dropdownLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const parentLi = link.parentElement;
        const submenu = parentLi.querySelector(".dropdown-menu");
        const isOpen = parentLi.classList.contains("active-dropdown");

        // Fecha todos os outros dropdowns abertos
        document.querySelectorAll(".has-dropdown").forEach((item) => {
            if (item !== parentLi) {
                item.classList.remove("active-dropdown");
                const other = item.querySelector(".dropdown-menu");
                if (other) other.classList.remove("open");
            }
        });

        // Alterna o atual
        parentLi.classList.toggle("active-dropdown", !isOpen);
        if (submenu) submenu.classList.toggle("open", !isOpen);
    });
});

// Clique fora fecha o dropdown
document.addEventListener("click", (e) => {
    if (!e.target.closest(".has-dropdown")) {
        document.querySelectorAll(".has-dropdown").forEach((item) => {
            item.classList.remove("active-dropdown");
            const sub = item.querySelector(".dropdown-menu");
            if (sub) sub.classList.remove("open");
        });
    }
});
