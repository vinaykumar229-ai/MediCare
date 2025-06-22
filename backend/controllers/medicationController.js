const db = require('../models/db');

exports.addMedication = (req, res) => {
  const { name, dosage, frequency } = req.body;
  const userId = req.userId;
  db.run(`INSERT INTO medications (userId, name, dosage, frequency) VALUES (?, ?, ?, ?)`,
    [userId, name, dosage, frequency],
    function (err) {
      if (err) return res.status(500).json({ error: 'Failed to add medication' });
      res.status(201).json({ message: 'Medication added', id: this.lastID });
    });
};

exports.getMedications = (req, res) => {
  const userId = req.userId;
  db.all(`SELECT * FROM medications WHERE userId = ?`, [userId], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch medications' });
    const taken = rows.filter(m => m.taken).length;
    const adherence = rows.length > 0 ? Math.round((taken / rows.length) * 100) : 0;
    res.json({ medications: rows, adherence });
  });
};

exports.markTaken = (req, res) => {
  const id = req.params.id;
  db.run(`UPDATE medications SET taken = 1 WHERE id = ?`, [id], function (err) {
    if (err) return res.status(500).json({ error: 'Failed to update medication' });
    res.json({ message: 'Medication marked as taken' });
  });
};
