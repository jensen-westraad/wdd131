document.addEventListener("DOMContentLoaded", () => {
    let count = localStorage.getItem("reviewCount");

    if (!count) {
        count = 0;
    }

    count = parseInt(count) + 1;

    localStorage.setItem("reviewCount", count);
    document.getElementById("reviewCount").textContent = count;
});
