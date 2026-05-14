const db = require('../database');

// Listar todos os produtos
exports.listarProdutos = (req, res) => {
    // Essa query "funde" as duas tabelas baseada no ID da categoria
    const query = `
        SELECT produtos.*, categorias.nome AS categoria_nome 
        FROM produtos 
        INNER JOIN categorias ON produtos.categoria_id = categorias.id
    `;

    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Criar um novo produto
exports.criarProduto = (req, res) => {
    // Adicionamos categoria_id aqui:
    const { nome, descricao, preco, estoque, categoria_id } = req.body;
    
    // Atualizamos a query SQL para incluir o novo campo:
    const query = 'INSERT INTO produtos (nome, descricao, preco, estoque, categoria_id) VALUES (?, ?, ?, ?, ?)';
    
    db.query(query, [nome, descricao, preco, estoque, categoria_id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Produto cadastrado com categoria!', id: result.insertId });
    });
};

// Atualizar um produto existente
exports.atualizarProduto = (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco, estoque } = req.body;
    const query = 'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, estoque = ? WHERE id = ?';
    
    db.query(query, [nome, descricao, preco, estoque, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Produto atualizado com sucesso!' });
    });
};

// Excluir um produto
exports.excluirProduto = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM produtos WHERE id = ?';
    
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Produto excluído com sucesso!' });
    });
};