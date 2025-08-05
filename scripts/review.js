document.addEventListener("DOMContentLoaded", () => {
    let count = localStorage.getItem("reviewCount");
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem("reviewCount", count);

    const counter = document.getElementById("reviewCount");
    if (counter) {
        counter.textContent = count;
    }
});