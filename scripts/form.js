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

    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];

    document.addEventListener("DOMContentLoaded", () => {
        const select = document.getElementById("product");

        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            select.appendChild(option);
        });
    });

});