// Define coordinates and culinary experiences
const locations = [
  { name: 'Turkey', latlng: [39.9334, 32.8597], menu: 'Turkish Menu' },
  { name: 'Lebanon', latlng: [33.8547, 35.8623], menu: 'Lebanese Menu' },
  { name: 'Greece', latlng: [37.9838, 23.7275], menu: 'Greek Menu' }
];

// Initialize the map
const map = L.map('map').setView([39.9334, 32.8597], 5); // Set initial view to Turkey

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for each location
locations.forEach(location => {
  const marker = L.marker(location.latlng).addTo(map);
  marker.bindPopup(`<b>Guess the Country!</b><br><a href="#" onclick="startGuessing('${location.name}', '${location.menu}')">Guess the Country!</a>`);
});

// Function to show menu
function showMenu(menu) {
  // Display the menu container
  const menuContainer = document.getElementById('menuContainer');
  const menuTitle = document.getElementById('menuTitle');
  menuTitle.textContent = menu;
  menuContainer.style.display = 'block';
}

// Function to start guessing game
function startGuessing(countryName, menu) {
  // Display the guess container
  const guessContainer = document.getElementById('guessContainer');
  guessContainer.style.display = 'block';

  // Set the correct country name and menu as attributes
  const guessInput = document.getElementById('guessInput');
  guessInput.setAttribute('data-correct-country', countryName);
  guessInput.setAttribute('data-menu', menu);
}

// Function to check the guess
function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = guessInput.value.trim().toLowerCase();
  const correctCountry = guessInput.getAttribute('data-correct-country').toLowerCase();
  
  if (guess === correctCountry) {
    // Correct guess: Show menu
    alert('Congratulations! You guessed it right. You get a 20% discount coupon!.');
    const menu = guessInput.getAttribute('data-menu');
    showMenu(menu);
  } else {
    // Incorrect guess: Show error message
    alert('Sorry, that\'s not correct. Try again!');
  }
}

// Function to skip guessing and directly show the menu
function skipGuess() {
  // const guessInput = document.getElementById('guessInput');
  // const menu = guessInput.getAttribute('data-menu');
  // showMenu(menu);
  window.location.href = "/SJAK";
}
