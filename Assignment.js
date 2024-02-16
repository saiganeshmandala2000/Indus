const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));

// In-memory data store
let submissions = [];

// Handle form submissions
app.post('/submit', (req, res) => {
    const { name, email, contact } = req.body;

    // Server-side validation
    if (!name || !email || !contact) {
        return res.status(400).send('All fields are required');
    }

    // Save data to in-memory data store
    submissions.push({ name, email, contact });
    console.log('New submission:', { name, email, contact });

    // Send success response
    res.send('Form submitted successfully');
});

// Get all submissions
app.get('/submissions', (req, res) => {
    res.json(submissions);
});

app.listen(PORT, () => {
    console.log(Server is running on http:localhost:${8084});
});