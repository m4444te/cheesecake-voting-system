// Sample data: images and their vote counts
const images = [
    { id: 1, src: 'images/image01.jpeg', votes: 0 },
    { id: 2, src: 'images/image02.jpeg', votes: 0 },
    { id: 3, src: 'images/image03.jpeg', votes: 0 },
    { id: 4, src: 'images/image04.jpg', votes: 0 },
    { id: 5, src: 'images/image05.jpg', votes: 0 },
    { id: 6, src: 'images/image06.jpg', votes: 0 },
    { id: 7, src: 'images/image07.jpeg', votes: 0 },
    { id: 8, src: 'images/image08.webp', votes: 0 },
    { id: 9, src: 'images/image09.jpg', votes: 0 }
];

// Function to render images
function renderImages() {
    const imageContainer = document.getElementById('images');
    imageContainer.innerHTML = ''; // Clear current content

    // Sort images by votes in descending order
    images.sort((a, b) => b.votes - a.votes);

    images.forEach((image, index) => {
        const imgDiv = document.createElement('div');
        imgDiv.className = 'image-container';

        // Apply border based on ranking
        if (index === 0) {
            imgDiv.classList.add('gold-border');
        } else if (index === 1) {
            imgDiv.classList.add('silver-border');
        } else if (index === 2) {
            imgDiv.classList.add('bronze-border');
        }

        const imgElement = document.createElement('img');
        imgElement.src = image.src;

        const voteCount = document.createElement('div');
        voteCount.className = 'vote-count';
        voteCount.innerText = `Votes: ${image.votes}`;

        const voteButtons = document.createElement('div');
        voteButtons.className = 'vote-buttons';

        const upvoteButton = document.createElement('button');
        upvoteButton.innerText = '+1';
        upvoteButton.onclick = () => vote(image.id, 1);

        const downvoteButton = document.createElement('button');
        downvoteButton.className = 'downvote';
        downvoteButton.innerText = '-1';
        downvoteButton.onclick = () => vote(image.id, -1);

        voteButtons.appendChild(upvoteButton);
        voteButtons.appendChild(downvoteButton);

        imgDiv.appendChild(imgElement);
        imgDiv.appendChild(voteCount);
        imgDiv.appendChild(voteButtons);

        imageContainer.appendChild(imgDiv);
    });
}

// Function to handle voting
function vote(imageId, change) {
    const image = images.find(img => img.id === imageId);
    if (image) {
        image.votes += change;
        renderImages(); // Re-render images after voting
    }
}

// Initial render
renderImages();