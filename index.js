const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

// In-memory user storage (use a real database in production)
const users = [];

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://luke-development-site.onrender.com', // Replace with your frontend domain
    methods: ['GET', 'POST'], // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Ensure headers are allowed
}));

// Health Check Route (optional, useful for debugging)
app.get('/', (req, res) => {
    res.send({ message: 'Server is running!' });
});

// Register Route
app.post('/register', async (req, res) => {
    const { email, password, name } = req.body;

    // Validation
    if (!email || !password || !name) {
        return res.status(400).send({ message: 'All fields are required.' });
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).send({ message: 'User already exists.' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Store the user
        users.push({ email, password: hashedPassword, name });
        res.status(201).send({ message: 'User registered successfully.' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send({ message: 'Internal server error.' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
        return res.status(400).send({ message: 'All fields are required.' });
    }

    // Find the user
    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(400).send({ message: 'Invalid email or password.' });
    }

    try {
        // Compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).send({ message: 'Invalid email or password.' });
        }
        res.status(200).send({ message: 'Login successful.', user: { name: user.name, email: user.email } });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send({ message: 'Internal server error.' });
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
