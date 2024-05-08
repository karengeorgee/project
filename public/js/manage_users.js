// Dummy user data (replace it with actual user data)
const users = [
    { name: "John Doe", type: "Admin" },
    { name: "Jane Smith", type: "User" },
    // Add more users as needed
  ];
  
  // Function to create a table row for each user
  function createUserRow(user) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.type}</td>
      <td>
        <button onclick="editUser('${user.name}')">Edit</button>
        <button onclick="deleteUser('${user.name}')">Delete</button>
      </td>
    `;
    return row;
  }
  
  // Function to render users in the table
  function renderUsers() {
    const tbody = document.querySelector("tbody");
    users.forEach(user => {
      const row = createUserRow(user);
      tbody.appendChild(row);
    });
  }
  
  // Function to edit a user (dummy function, replace with actual edit functionality)
  function editUser(userName) {
    alert(`Editing user: ${userName}`);
  }
  
  // Function to delete a user (dummy function, replace with actual delete functionality)
  function deleteUser(userName) {
    alert(`Deleting user: ${userName}`);
  }
  
  // Call renderUsers function to populate the table when the page loads
  document.addEventListener("DOMContentLoaded", renderUsers);
  