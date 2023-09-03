const scratchOverlay = document.querySelector('.scratch-overlay');
let isScratching = false;

function startScratching(event) {
    isScratching = true;
    event.preventDefault();
}

function endScratching() {
    isScratching = false;
}

function scratch(event) {
    if (isScratching) {
        const rect = scratchOverlay.getBoundingClientRect();
        let x, y;
        
        if (event.type === 'mousemove') {
            x = event.clientX - rect.left;
            y = event.clientY - rect.top;
        } else if (event.type === 'touchmove') {
            x = event.touches[0].clientX - rect.left;
            y = event.touches[0].clientY - rect.top;
        }
        
        scratchOverlay.style.webkitMaskImage = `radial-gradient(circle at ${x}px ${y}px, transparent 10%, black 25%)`;
        scratchOverlay.style.maskImage = `radial-gradient(circle at ${x}px ${y}px, transparent 10%, black 25%)`;
    }
}

scratchOverlay.addEventListener('mousedown', startScratching);
scratchOverlay.addEventListener('touchstart', startScratching);

scratchOverlay.addEventListener('mouseup', endScratching);
scratchOverlay.addEventListener('touchend', endScratching);

scratchOverlay.addEventListener('mousemove', scratch);
scratchOverlay.addEventListener('touchmove', scratch);
