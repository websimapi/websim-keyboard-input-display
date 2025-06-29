console.log('script.js loaded.');

document.addEventListener('keydown', (event) => {
    console.log('keydown event detected. Key Code:', event.keyCode, 'Key:', event.key, 'Code:', event.code);
    const keyCodeDisplay = document.getElementById('keyCodeDisplay');
    if (keyCodeDisplay) {
        keyCodeDisplay.textContent = event.keyCode;
        console.log('Display updated with key code:', event.keyCode);
    } else {
        console.error('Error: #keyCodeDisplay element not found during keydown event.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired.');
    const keyCodeDisplay = document.getElementById('keyCodeDisplay');
    if (keyCodeDisplay) {
        keyCodeDisplay.textContent = '---'; // Initial state before any key press
        console.log('#keyCodeDisplay element found and initialized to "---".');
    } else {
        console.error('Error: #keyCodeDisplay element not found during DOMContentLoaded.');
    }
});