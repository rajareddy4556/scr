// script.js
const scratchArea = document.querySelector(".scratch-area");
const hiddenImage = document.querySelector(".hidden-image");

let isScratching = false;

scratchArea.addEventListener("mousedown", () => {
    isScratching = true;
});

scratchArea.addEventListener("mouseup", () => {
    isScratching = false;
});

scratchArea.addEventListener("mousemove", (e) => {
    if (isScratching) {
        const x = e.clientX - scratchArea.getBoundingClientRect().left;
        const y = e.clientY - scratchArea.getBoundingClientRect().top;

        const revealPercent = getRevealPercentage(x, y);

        if (revealPercent >= 90) {
            hiddenImage.style.clipPath = "none"; // Fully reveal the image
        } else {
            // Gradually reveal the image as you scratch
            hiddenImage.style.clipPath = `polygon(0% 0%, ${revealPercent}% 0%, ${revealPercent}% 100%, 0% 100%)`;
        }
    }
});

function getRevealPercentage(x, y) {
    const scratchAreaWidth = scratchArea.offsetWidth;
    const scratchAreaHeight = scratchArea.offsetHeight;

    return ((x / scratchAreaWidth) * 100) * ((y / scratchAreaHeight) * 100) / 100;
}
