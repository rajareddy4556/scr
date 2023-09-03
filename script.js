const scratchOverlay = document.querySelector('.scratch-overlay');
let isScratching = false;

scratchOverlay.addEventListener('mousedown', () => {
    isScratching = true;
});

scratchOverlay.addEventListener('mouseup', () => {
    isScratching = false;
});

scratchOverlay.addEventListener('mousemove', (e) => {
    if (isScratching) {
        const rect = scratchOverlay.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        scratchOverlay.style.webkitMaskImage = `radial-gradient(circle at ${x}px ${y}px, transparent 10%, black 25%)`;
        scratchOverlay.style.maskImage = `radial-gradient(circle at ${x}px ${y}px, transparent 10%, black 25%)`;
    }
});
