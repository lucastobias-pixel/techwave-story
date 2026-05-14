const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const authMiddleware = require('../middlewares/authMiddleware');

/**
 * @swagger
 * /produtos:
 *   get:                          
 *     summary: Listar produtos    
 *     responses:                  
 *       200:                      
 *         description: Sucesso    
 */
router.get('/', produtoController.listarProdutos);

/**
 * @swagger
 * /produtos:
 *   post:                         
 *     summary: Criar produto      
 *     responses:                  
 *       201:                      
 *         description: Criado     
 */
router.post('/', authMiddleware, produtoController.criarProduto);

router.put('/:id', authMiddleware, produtoController.atualizarProduto);
router.delete('/:id', authMiddleware, produtoController.excluirProduto);

module.exports = router;