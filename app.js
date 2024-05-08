const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Parse JSON requests
app.use(express.json());

// Parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static("public", { maxAge: "7d" }));

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/homepg', (req, res) => {
    res.send('Home Page');
});

// Route to serve SKAJ.html from the 'views' folder
app.get('/SJAK', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'SJAK.html'));
});

// Route to serve bgrb.html from the 'views' folder
app.get('/bgrb', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'bgrb.html'));
});

// Route to serve mapmenu.html from the 'views' folder
app.get('/mapmenu', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'mapmenu.html'));
});
app.get('/sign', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'sign.html'));
});
app.get('/userdash', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'userdash.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
app.get('/Reservation', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Reservation.html'));
});
 
app.get('/view', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'view.html'));
});
app.get('/myhis', (req, res) => {

    res.sendFile(path.join(__dirname, 'views', 'myhis.html')  )
});

    

app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'menu.html'));
});

app.get('/manage_users', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'manage_users.html'));
});



// app.get('/admindash', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'admindash.html'));
// });
// Catch-all route for undefined routes
app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});




// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
