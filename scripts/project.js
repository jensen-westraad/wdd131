document.addEventListener("DOMContentLoaded", () => {

    const footer = document.querySelector("footer");
    const year = new Date().getFullYear();
    const copyrightText = `©${year} 🎞️ Jensen Anthony Westraad 🎞️ South Africa`;
    footer.querySelector("p").innerHTML = copyrightText;


    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }


    const menuButton = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("main-nav");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("hide");

        // Toggle icon between ☰ and ✖
        menuButton.textContent = navMenu.classList.contains("hide") ? "☰" : "✖";
    });
});