// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModified = document.lastModified;

// Get all <p> elements inside the <footer>
const footerParagraphs = document.querySelectorAll("footer p");

// Make sure there are at least 2 paragraphs
if (footerParagraphs.length >= 2) {
    footerParagraphs[0].textContent = `© ${currentYear}`;
    footerParagraphs[1].textContent = `Last modified: ${lastModified}`;
}