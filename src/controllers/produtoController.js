const db = require('../database');

exports.listarProdutos = (req, res) => {
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

exports.criarProduto = (req, res) => {
    const { nome, descricao, preco, estoque, categoria_id } = req.body;
    
    const query = 'INSERT INTO produtos (nome, descricao, preco, estoque, categoria_id) VALUES (?, ?, ?, ?, ?)';
    
    db.query(query, [nome, descricao, preco, estoque, categoria_id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Produto cadastrado com categoria!', id: result.insertId });
    });
};

exports.atualizarProduto = (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco, estoque } = req.body;
    const query = 'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, estoque = ? WHERE id = ?';
    
    db.query(query, [nome, descricao, preco, estoque, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Produto atualizado com sucesso!' });
    });
};

exports.excluirProduto = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM produtos WHERE id = ?';
    
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Produto excluído com sucesso!' });
    });
};
