const db = require('../database');
const bcrypt = require('bcryptjs');

exports.registrar = async (req, res) => {
    const { nome, email, senha } = req.body;
    const senhaHash = await bcrypt.hash(senha, 10); // Criptografa a senha

    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    db.query(query, [nome, email, senhaHash], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Usuário criado com sucesso!' });
    });
};