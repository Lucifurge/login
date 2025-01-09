const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors'); // Import CORS

const users = []; // In-memory user storage (you can use a real database in production)

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Enable CORS for all origins (or specify a particular origin for better security)
app.use(cors({
    origin: 'https://luke-development-site.onrender.com' // Replace with your frontend URL
}));

// Register Route
app.post('/register', async (req, res) => {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password for security

    // Store the user (add more validations here)
    users.push({ email, password: hashedPassword, name });

    res.status(201).send({ message: 'User registered successfully' });
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);

    if (!user) {
        return res.status(400).send({ message: 'Invalid email or password' });
    }

    // Compare the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).send({ message: 'Invalid email or password' });
    }

    res.status(200).send({ message: 'Login successful', user: { name: user.name, email: user.email } });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
