document.addEventListener("DOMContentLoaded", function() {
    const gameBoard = document.getElementById('game-board');
    const flipSound = document.getElementById('flip-sound');

    // Fetch the images from the server
    fetch('/images')
        .then(response => response.json())
        .then(imagePaths => {
            imagePaths.forEach((path, index) => {
                const imageCard = document.createElement('div');
                imageCard.classList.add('image-card');
                imageCard.style.backgroundImage = `url('${path}')`;

                imageCard.addEventListener('click', () => {
                    flipSound.currentTime = 0;
                    flipSound.play(); // Play the sound

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
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
});
