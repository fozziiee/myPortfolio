/* Logic to create count up timer  */
// Step 1: Set programming start date (day, month, year)
const startDate = new Date('2024-06-19');

function updateTimer() {
    // Step 2: Calculate the difference
    const now = new Date();
    const difference = now - startDate;
    const seconds = Math.floor(difference / 1000);

    const formattedSeconds = seconds.toLocaleString();

    // Step 3: Update the timer
    document.getElementById('time-container').textContent = `${formattedSeconds}`;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initialise the timer on page load
document.addEventListener('DOMContentLoaded', updateTimer);


// // Themes
// function darkMode() {
//     let element = document.body;
//     element.classList.toggle('dark-mode');
// }
