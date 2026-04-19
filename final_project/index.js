const express = require('express');
const axios = require('axios');
let router = express.Router();

const BASE_URL = "http://localhost:5000";

// ✅ Get all books
router.get('/async/books', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books" });
  }
});

// ✅ Get book by ISBN
router.get('/async/books/isbn/:isbn', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/isbn/${req.params.isbn}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching book by ISBN" });
  }
});

// ✅ Get books by Author
router.get('/async/books/author/:author', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/author/${req.params.author}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books by author" });
  }
});

// ✅ Get books by Title
router.get('/async/books/title/:title', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/title/${req.params.title}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books by title" });
  }
});

module.exports = router;
