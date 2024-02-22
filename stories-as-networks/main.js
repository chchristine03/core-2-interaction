document.addEventListener('DOMContentLoaded', function() {
    const numberContainer = document.getElementById('number-container');
    const generateButton = document.getElementById('generate-btn');

    function generateNumbers() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const numberWidth = 100; // Assumed width of each number
    const numberHeight = 100; // Assumed height of each number

    // Calculate the number of rows and columns
    const numberOfRows = Math.ceil(viewportHeight / numberHeight);
    const numberOfColumns = Math.ceil(viewportWidth / numberWidth);

     // Clear previous content
     numberContainer.innerHTML = '';

    // Generate and append numbers to the container
    for (let row = 0; row < numberOfRows; row++) {
        for (let col = 0; col < numberOfColumns; col++) {
            const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number
            const numberElement = document.createElement('span');
            numberElement.classList.add('number');
            numberElement.textContent = randomNumber;
            numberContainer.appendChild(numberElement);
        }
    }
    }
    // Assigning generateNumbers to button click event
    generateButton.addEventListener('click', generateNumbers);
     // Initial generation of numbers when page loads
  generateNumbers();
});