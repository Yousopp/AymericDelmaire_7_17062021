require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mysql = require('mysql2');
const helmet = require("helmet");
const path = require('path');
const userRoutes = require('./routes/user.js');
const postRoutes = require('./routes/post.js');
const app = express();
const cors = require("cors");

app.use(helmet()); // API plus sécurisée pour réspecter l'OWASP

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: process.env.dialect
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});

app.use((req, res, next) => { //Résolution erreur CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);

module.exports = app;