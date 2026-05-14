const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const authMiddleware = require('../middlewares/authMiddleware'); // Importando o segurança

// Rota pública: Qualquer um (mesmo sem login) pode ver os produtos
router.get('/', produtoController.listarProdutos);

// Rotas PROTEGIDAS: Só quem tem o Token (está logado) consegue usar
// Note que o 'authMiddleware' vem antes do 'produtoController'
router.post('/', authMiddleware, produtoController.criarProduto);
router.put('/:id', authMiddleware, produtoController.atualizarProduto);
router.delete('/:id', authMiddleware, produtoController.excluirProduto);

module.exports = router;