const express = require('express');
const axios = require('axios');
let router = express.Router();

const BASE_URL = "http://localhost:5000";

// ✅ Get all books
router.get('/async/books', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return res.json(response.data);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching books" });
  }
});

// ✅ Get book by ISBN
router.get('/async/books/isbn/:isbn', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/isbn/${req.params.isbn}`);
    if (!response.data) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.json(response.data);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching book by ISBN" });
  }
});

// ✅ Get books by Author
router.get('/async/books/author/:author', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    const books = Object.values(response.data.books);

    const filtered = books.filter(
      book => book.author.toLowerCase() === req.params.author.toLowerCase()
    );

    if (filtered.length === 0) {
      return res.status(404).json({ message: "Author not found" });
    }

    return res.json(filtered);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching books by author" });
  }
});

// ✅ Get books by Title
router.get('/async/books/title/:title', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    const books = Object.values(response.data.books);

    const filtered = books.filter(
      book => book.title.toLowerCase() === req.params.title.toLowerCase()
    );

    if (filtered.length === 0) {
      return res.status(404).json({ message: "Title not found" });
    }

    return res.json(filtered);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching books by title" });
  }
});

module.exports = router;
