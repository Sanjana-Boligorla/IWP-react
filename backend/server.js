const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;
const MONGO_URI = "mongodb+srv://anjana_sa:B9Ed08egOLkwFco2@cluster0.kwlnytk.mongodb.net/";

// MongoDB connection
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// User model
const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

const User = mongoose.model('User', UserSchema, 'users_list');


const AdminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const Admin = mongoose.model('Admin', AdminSchema, 'admins_list');


// Middleware to validate user input
function validateUserData(req, res, next) {
    const { name, email, password } = req.body;

    // Check if all fields are present
    if (!name || !email || !password) {
        return res.status(400).send("All fields are required");
    }

    // Check if email format is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send("Invalid email format");
    }

    // If all validations pass, proceed to the next middleware
    next();
}

// Routes
app.post('/signup', validateUserData, async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).send("User created");
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).send("Email already exists");
        }
        res.status(500).send("Error creating user");
    }
});

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
        res.send("Sign in successful");
    } else {
        res.status(400).send("Invalid credentials");
    }
});

app.post('/admin/signup', validateUserData, async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newAdmin = new Admin({ name, email, password: hashedPassword });
        await newAdmin.save();
        res.status(201).send("Admin created");
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).send("Email already exists");
        }
        res.status(500).send("Error creating admin");
    }
});

app.post('/admin/signin', async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (admin && await bcrypt.compare(password, admin.password)) {
        res.send("Admin sign in successful");
    } else {
        res.status(400).send("Invalid admin credentials");
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
