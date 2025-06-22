const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  addMedication,
  getMedications,
  markTaken
} = require('../controllers/medicationController');

router.post('/', auth, addMedication);
router.get('/', auth, getMedications);
router.put('/taken/:id', auth, markTaken);

module.exports = router;
