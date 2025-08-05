console.log("✅ form.js loaded");

document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: "fc-1888", name: "flux capacitor" },
        { id: "fc-2050", name: "power laces" },
        { id: "fs-1987", name: "time circuits" },
        { id: "ac-2000", name: "low voltage reactor" },
        { id: "jj-1969", name: "warp equalizer" }
    ];

    const select = document.getElementById("product");

    if (!select) {
        console.error("❌ Could not find <select id='product'> element.");
        return;
    }

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });

    // ✅ Only update lastModified if the element exists
    const modifiedSpan = document.getElementById("lastModified");
    if (modifiedSpan) {
        modifiedSpan.textContent = document.lastModified;
    }

    console.log("✅ Dropdown populated and lastModified updated.");
});
