// Function to toggle the visibility of the menu items
function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("show");
}

// Array of background image URLs
var backgroundImages = [
    'https://archello.s3.eu-central-1.amazonaws.com/images/2023/07/06/pedrali-khufu--039-s-restaurant-restaurants-archello.1688626959.6432.jpg',
    'https://archello.s3.eu-central-1.amazonaws.com/images/2023/07/06/pedrali-khufu--039-s-restaurant-restaurants-archello.1688626957.0384.jpg',
    'https://archello.s3.eu-central-1.amazonaws.com/images/2023/07/06/pedrali-khufu--039-s-restaurant-restaurants-archello.1688626959.0393.jpg',
    'https://scenenow.com/Content/editor_api/images/S%20Khufu\'s_Restaurant_46-8118adc5-73ed-487e-a948-6b7cbdfecacb.jpg'
];

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





