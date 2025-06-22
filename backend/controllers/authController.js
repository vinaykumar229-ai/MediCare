const db = require('../models/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  db.run(`INSERT INTO users (username, password, role) VALUES (?, ?, ?)`,
    [username, hashedPassword, role],
    function (err) {
      if (err) return res.status(400).json({ error: 'Username already exists' });
      res.status(201).json({ message: 'User registered', userId: this.lastID });
    });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, user) => {
    if (err || !user) return res.status(400).json({ error: 'Invalid credentials' });
    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secretkey');
    res.json({ token, role: user.role });
  });
};
