document.addEventListener("DOMContentLoaded", function() {
    const gameBoard = document.getElementById('game-board');
    const flipSound = document.getElementById('flip-sound');
    flipSound.preload = 'auto';
    flipSound.load();

    // Select a random folder
    const numberOfFolders = 1; // Update this to the actual number of folders you have
    const selectedFolderIndex = Math.floor(Math.random() * numberOfFolders) + 1;
    const selectedFolder = `folders/folder${selectedFolderIndex}/`;

    fetch(`${selectedFolder}names.json`)
    .then(response => response.json())
    .then(names => {
        names.forEach((nameObj, index) => {
            const imagePath = `${selectedFolder}${nameObj.fileName}`;
            const name = nameObj.name;

            const imageCard = document.createElement('div');
            imageCard.classList.add('image-card');

            // Create front and back sides of the card
            const frontSide = document.createElement('div');
            frontSide.classList.add('front-side');
            frontSide.style.backgroundImage = `url('${imagePath}')`;
            const backSide = document.createElement('div');
            backSide.classList.add('back-side');
            backSide.textContent = name; // Add name to the back side

            imageCard.appendChild(frontSide);
            imageCard.appendChild(backSide);

            imageCard.addEventListener('click', () => {
                flipSound.currentTime = 0;
                flipSound.play();
                imageCard.classList.toggle('flipped');
            });

            gameBoard.appendChild(imageCard);
        });
    })
    .catch(error => console.error('Error loading image data:', error));
});
