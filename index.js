const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors'); // Import CORS

const users = []; // In-memory user storage (you can use a real database in production)

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Enable CORS for all origins (or specify a particular origin for better security)
app.use(cors({const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

// In-memory user storage (for production, use a database)
const users = [];

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://your-frontend-domain.onrender.com', // Replace with your frontend domain
}));

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
        const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

// In-memory user storage (for production, use a database)
const users = [];

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://luke-development-site.onrender.com/', // Replace with your frontend domain
}));

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
        }const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

// In-memory user storage (for production, use a database)
const users = [];

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://your-frontend-domain.onrender.com', // Replace with your frontend domain
}));

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
