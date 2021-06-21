require('dotenv').config()
const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "process.env.DB_HOST",
    user: "process.env.DB_USER",
    password: "process.env.DB_PASS"
  });

db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

module.exports = app;

