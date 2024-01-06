document.addEventListener("DOMContentLoaded", function() {
    const gameBoard = document.getElementById('game-board');
    const flipSound = document.getElementById('flip-sound');
    flipSound.preload = 'auto';
    flipSound.load();
    const imagePaths = [];

    // Generate image paths
    for (let i = 1; i <= 24; i++) {
        imagePaths.push(`images/image${i}.jpeg`); // Adjust the file extension if needed
    }

    imagePaths.forEach((path, index) => {
        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card');
        imageCard.style.backgroundImage = `url('${path}')`; // Set initial background image
        imageCard.style.backgroundSize = 'cover'; // Ensure image covers the card
        imageCard.addEventListener('click', () => {
            flipSound.currentTime = 0;
            flipSound.play();
            if (imageCard.classList.contains('flipped')) {
                imageCard.style.backgroundImage = `url('${path}')`;
                imageCard.classList.remove('flipped');
            } else {
                imageCard.style.backgroundImage = '';
                imageCard.classList.add('flipped');
            }
        });
        gameBoard.appendChild(imageCard);
    });
});
