const express = require('express');
const router = express.Router();
const clientController = require('../Controllers/clientController');
// const auth = require('../Middelware/authentification')

router.post('/signup', clientController.Clientsignup);
router.post('/login', clientController.Clientlogin);
// router.get('/',clientController.getAllVendeur);
// router.get('/getseller/:id',clientController.getVendeurById);
// router.put('/update/:id',clientController.updateVendeur);



module.exports = router;