document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    const year = new Date().getFullYear();
    footer.querySelector("p").innerHTML = `©${year} 🎞️ Jensen Anthony Westraad 🎞️ South Africa`;

    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }

    const menuButton = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("main-nav");
    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("hide");
            menuButton.textContent = navMenu.classList.contains("hide") ? "☰" : "✖";
        });
    }

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    function renderWishlist() {
        const wishlistContainer = document.getElementById("wishlist");
        wishlistContainer.innerHTML = ""; // clear before rendering

        if (wishlist.length === 0) {
            wishlistContainer.innerHTML = "<li>No items in wishlist yet.</li>";
            return;
        }

        wishlist.forEach((item, index) => {
            wishlistContainer.innerHTML += `
                <li>
                    <strong>${item.title}</strong> by ${item.artist}
                    <button data-index="${index}" class="remove-btn">Remove</button>
                </li>
            `;
        });

        // Add remove button events
        document.querySelectorAll(".remove-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const index = e.target.dataset.index;
                wishlist.splice(index, 1); // remove from array
                localStorage.setItem("wishlist", JSON.stringify(wishlist)); // update storage
                renderWishlist();
            });
        });
    }

    // Object Example: Creating album objects from form input
    document.getElementById("wishlist-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("album-title").value.trim();
        const artist = document.getElementById("album-artist").value.trim();


        if (wishlist.some(item => item.title.toLowerCase() === title.toLowerCase())) {
            alert("This album is already in your wishlist!");
            return;
        }

        const albumObject = { title, artist };
        wishlist.push(albumObject);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        e.target.reset(); // clear form
        renderWishlist();
    });

    // Initial render
    renderWishlist();

    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const title = button.dataset.title || "Unknown Title";
            const artist = button.dataset.artist || "Unknown Artist";
            const year = button.dataset.year || "Unknown Year";
            const genre = button.dataset.genre || "Unknown Genre";
            const price = button.dataset.price || "Unknown Price"

            alert(`${title} by ${artist} (${year}) - Genre: ${genre} - Pricing: ${price}`);
        });
    });




});


