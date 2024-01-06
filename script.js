document.addEventListener("DOMContentLoaded", function() {
    const gameBoard = document.getElementById('game-board');

    // List of all image names
    const allImages = [
        "ali.jpg", "amy.jpg", "andy.jpg", "angelina.jpg", "awkwafina.jpg",
        "basquiat.jpg", "benedict.jpg", "betty.jpg", "beyonce.jpg", "bill.jpg",
        "billie.jpg", "bruce.jpg", "cardi.jpg", "christian.jpg", "courtney.jpg",
        "dave.jpg", "dolly.jpg", "dua.jpg", "dwayne.jpg", "ed.jpg",
        "elijah.jpg", "elon.jpg", "eminem.jpg", "emma.jpg", "florence.jpg",
        "freddie.jpg", "frida.jpg", "gaga.jpg", "greta.jpg", "halle.jpg",
        "harry.jpg", "irwin.jpg", "jackie.jpg", "jayz.jpg", "jennifer.jpg",
        "jordan.jpg", "justin.jpg", "kanye.jpg", "kendall.jpg", "kim.jpg",
        "lizzo.jpg", "lucy.jpg", "malala.jpg", "margot.jpg", "megan.jpg",
        "meryl.jpg", "messi.jpg", "michelle.jpg", "mindy.jpg", "mrbeast.jpg",
        "nelson.jpg", "oprah.jpg", "pablo.jpg", "pewdiepie.jpg", "pharrell.jpg",
        "pitbull.jpg", "pope.jpg", "rihanna.jpg", "robert.jpg", "ronaldo.jpg",
        "salma.jpg", "shakira.jpg", "sofia.jpg", "steve.jpg", "styles.jpg",
        "taylor.jpg", "tiger.jpg", "tony.jpg", "trevor.jpg", "trump.jpg",
        "yoko.jpg", "zendaya.jpg"
    ];
    
    // Function to generate a seed based on current time's minute's tens place
    function generateSeed() {
        const currentTime = new Date();
        const minutes = currentTime.getMinutes();
        return Math.floor(minutes / 10);
    }

    // Function to shuffle an array based on a seed
    function seededShuffle(array, seed) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // Seed-based random number generator
        function seededRandom() {
            var x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
        }

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(seededRandom() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // Use the seed to shuffle the array of images and select the first 24
    const seed = generateSeed();
    const randomImages = seededShuffle([...allImages], seed).slice(0, 24);

    // Load flip sound
    const flipSound = document.getElementById('flip-sound');
    flipSound.preload = 'auto';
    flipSound.load();

    // Create and display image cards
    randomImages.forEach((imageName) => {
        const imagePath = `/images/${imageName}`;
        const name = imageName.split('.')[0];

        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card');

        // Create front and back sides of the card
        const frontSide = document.createElement('div');
        frontSide.classList.add('front-side');
        frontSide.style.backgroundImage = `url('${imagePath}')`;
        const backSide = document.createElement('div');
        backSide.classList.add('back-side');
        backSide.textContent = name;

        imageCard.appendChild(frontSide);
        imageCard.appendChild(backSide);

        imageCard.addEventListener('click', () => {
            flipSound.currentTime = 0;
            flipSound.play();
            imageCard.classList.toggle('flipped');
        });

        gameBoard.appendChild(imageCard);
    });
});
