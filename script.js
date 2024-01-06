document.addEventListener("DOMContentLoaded", function() {
    const gameBoard = document.getElementById('game-board');
    const flipSound = document.getElementById('flip-sound');
    flipSound.preload = 'auto';
    flipSound.load();

    // Select a random folder
    const numberOfFolders = 1; // Update this to the actual number of folders you have
    const selectedFolderIndex = Math.floor(Math.random() * numberOfFolders) + 1;
    const selectedFolder = `folders/folder${selectedFolderIndex}/`;

    const imagePaths = [];
    for (let i = 1; i <= 24; i++) {
        imagePaths.push(`${selectedFolder}image${i}.jpeg`); // Adjust the file extension if needed
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
