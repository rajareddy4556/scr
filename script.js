// script.js
const scratchArea = document.querySelector(".scratch-area");
const hiddenImage = document.querySelector(".hidden-image");

let isScratching = false;

// Event listeners for touch devices
scratchArea.addEventListener("touchstart", (e) => {
    isScratching = true;
    handleScratch(e.touches[0].clientX, e.touches[0].clientY);
});

scratchArea.addEventListener("touchmove", (e) => {
    if (isScratching) {
        handleScratch(e.touches[0].clientX, e.touches[0].clientY);
    }
});

scratchArea.addEventListener("touchend", () => {
    isScratching = false;
});

function handleScratch(x, y) {
    const rect = scratchArea.getBoundingClientRect();
    x -= rect.left;
    y -= rect.top;

    const revealPercent = getRevealPercentage(x, y);

    if (revealPercent >= 90) {
        hiddenImage.style.clipPath = "none"; // Fully reveal the image
    } else {
        // Gradually reveal the image as you scratch
        hiddenImage.style.clipPath = `polygon(0% 0%, ${revealPercent}% 0%, ${revealPercent}% 100%, 0% 100%)`;
    }
}

function getRevealPercentage(x, y) {
    const scratchAreaWidth = scratchArea.offsetWidth;
    const scratchAreaHeight = scratchArea.offsetHeight;

    return ((x / scratchAreaWidth) * 100) * ((y / scratchAreaHeight) * 100) / 100;
}
