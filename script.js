document.addEventListener('keydown', (event) => {
    const keyCodeDisplay = document.getElementById('keyCodeDisplay');
    if (keyCodeDisplay) {
        keyCodeDisplay.textContent = event.keyCode;
    }
});

// Initialize display with a message
document.addEventListener('DOMContentLoaded', () => {
    const keyCodeDisplay = document.getElementById('keyCodeDisplay');
    if (keyCodeDisplay) {
        keyCodeDisplay.textContent = '---'; // Initial state before any key press
    }
});

