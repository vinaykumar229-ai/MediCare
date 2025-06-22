const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./medications.db');

// Users and Medications table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    role TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS medications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    name TEXT,
    dosage TEXT,
    frequency TEXT,
    taken INTEGER DEFAULT 0,
    FOREIGN KEY(userId) REFERENCES users(id)
  )`);
});

module.exports = db;
