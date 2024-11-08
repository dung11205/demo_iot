const express = require('express');
const app = express();
require('dotenv').config();
var cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const MONGODB_URL = 'mongodb+srv://dung:dung123@oitdung.orss1.mongodb.net/?retryWrites=true&w=majority&appName=OITdung';

// Connect to MongoDB
mongoose.connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
const locationRoute = require('./api/routes/location.route');
app.use("/v1/api/location", locationRoute);

// Default route
app.get('/', (req, res) => res.send("dung123"));

// Server listen
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
///1/1//1/1/1/1/1/1/1//1/1/1/1/1//1/1/