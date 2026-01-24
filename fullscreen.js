// Fullscreen functionality
(function() {
    'use strict';

    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const gameWrapper = document.querySelector('.game-wrapper');

    if (!fullscreenBtn || !gameWrapper) {
        console.warn('Fullscreen elements not found');
        return;
    }

    // Toggle fullscreen on button click
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            // Enter fullscreen
            if (gameWrapper.requestFullscreen) {
                gameWrapper.requestFullscreen();
            } else if (gameWrapper.webkitRequestFullscreen) {
                gameWrapper.webkitRequestFullscreen();
            } else if (gameWrapper.mozRequestFullScreen) {
                gameWrapper.mozRequestFullScreen();
            } else if (gameWrapper.msRequestFullscreen) {
                gameWrapper.msRequestFullscreen();
            }
        } else {
            // Exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    });

    // Update button text based on fullscreen state
    function updateFullscreenButton() {
        if (document.fullscreenElement || document.webkitFullscreenElement || 
            document.mozFullScreenElement || document.msFullscreenElement) {
            fullscreenBtn.innerHTML = '<span aria-hidden="true">⛶</span> Sair';
        } else {
            fullscreenBtn.innerHTML = '<span aria-hidden="true">⛶</span> Tela Cheia';
        }
    }

    // Listen for fullscreen changes
    document.addEventListener('fullscreenchange', updateFullscreenButton);
    document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
    document.addEventListener('mozfullscreenchange', updateFullscreenButton);
    document.addEventListener('MSFullscreenChange', updateFullscreenButton);
})();
