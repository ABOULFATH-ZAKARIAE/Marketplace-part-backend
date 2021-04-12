const express = require('express');
const router = express.Router();
const vendeurController = require('../Controllers/vendeurController');
// const auth = require('../Middelware/authentification')

router.post('/signup', vendeurController.Sellersignup);
router.post('/login', vendeurController.Sellerlogin);
router.get('/',vendeurController.getAllVendeur);
router.get('/getseller/:id',vendeurController.getVendeurById);
router.put('/update/:id',vendeurController.updateVendeur);



module.exports = router;