// Function to toggle the visibility of the menu items
function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("show");
}

// Array of background image URLs

var currentImageIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
    document.body.style.backgroundImage = 'url("' + backgroundImages[currentImageIndex] + '")';
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}

// Call the function initially to set the first background image
changeBackgroundImage();

// Set an interval to call the function every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundImage, 5000);


// Initialize Flatpickr for the calendar widget
flatpickr("#calendar", {
    enableTime: true, // Allow selecting time as well
    dateFormat: "Y-m-d H:i", // Format of the selected date and time
    minDate: "today", // Minimum selectable date is today
    maxDate: new Date().fp_incr(30), // Maximum selectable date is 30 days from today
});

// Show the calendar when the "BOOK YOUR TABLE" button is clicked
document.querySelector(".book-button").addEventListener("click", function() {
    document.getElementById("calendar").style.display = "block";
});





