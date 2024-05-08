function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("show");
}

function showManageUsers() {
    var manageUsersTable = document.getElementById("manageUsersTable");
    var menuItems = document.getElementById("menuItems");
    manageUsersTable.style.display = "block";
    menuItems.classList.remove("show"); // Close the menu
    // Populate table with dummy user data (You can replace this with your actual user data)
    var usersTableBody = document.getElementById("usersTableBody");
    var tableBodyHTML = ''; // Initialize an empty string to store the table body HTML
    for (var i = 1; i <= 10; i++) {
        tableBodyHTML += `<tr>
            <td>User ${i}</td>
            <td>Admin/User</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>`;
    }
    usersTableBody.innerHTML = tableBodyHTML; // Set the table body HTML once
}

function showManageReservations() {
    var manageUsersTable = document.getElementById("manageUsersTable");
    var manageReservationsTable = document.getElementById("manageReservationsTable");
    manageUsersTable.style.display = "none";
    manageReservationsTable.style.display = "block";
    menuItems.classList.remove("show"); // Close the menu

    // Populate reservations table with dummy data (You can replace this with your actual data)
    var reservationsTableBody = document.getElementById("reservationsTableBody");
    reservationsTableBody.innerHTML = ''; // Clear existing rows
    for (var i = 1; i <= 10; i++) {
        var reservationRow = `
          <tr>
            <td>Reservation ${i}</td>
            <td>John Doe</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        `;
        reservationsTableBody.innerHTML += reservationRow;
    }
    
}
function showManageItems() {
    var manageUsersTable = document.getElementById("manageUsersTable");
    var manageReservationsTable = document.getElementById("manageReservationsTable");
    var manageItemsTable = document.getElementById("manageItemsTable");
    manageUsersTable.style.display = "none";
    manageReservationsTable.style.display = "none";
    manageItemsTable.style.display = "block";
    menuItems.classList.remove("show"); // Close the menu

    // Populate items table with dummy data (You can replace this with your actual data)
    var itemsTableBody = document.getElementById("itemsTableBody");
    itemsTableBody.innerHTML = ''; // Clear existing rows
    var cuisines = ["Lebanese", "Greek", "Turkish"];
    for (var i = 1; i <= 10; i++) {
        var cuisineIndex = i % cuisines.length;
        var itemRow = `
          <tr>
            <td>Item ${i}</td>
            <td>${cuisines[cuisineIndex]}</td>
            <td>$10.00</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
              <button>Add</button>
            </td>
          </tr>
        `;
        itemsTableBody.innerHTML += itemRow;
    }
}


