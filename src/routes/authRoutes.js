const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @swagger
 * /auth/registrar:
 *   post:                          
 *     summary: Registro de usuário 
 *     responses:                   
 *       201:                       
 *         description: Sucesso     
 */
router.post('/registrar', authController.registrar);

/**
 * @swagger
 * /auth/login:
 *   post:                          
 *     summary: Login do usuário    
 *     responses:                   
 *       200:                       
 *         description: Logado      
 */
router.post('/login', authController.login);

module.exports = router;