const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Parse URL-encoded bodies (for form data)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Parse JSON bodies (for API requests)
app.use(bodyParser.json());

// Define your routes here
app.get('/', (req, res) => {
    res.render('home');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});