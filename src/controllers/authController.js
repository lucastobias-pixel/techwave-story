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

const jwt = require('jsonwebtoken'); // Adicione isso no topo do arquivo

// Mantenha o seu exports.registrar aqui em cima e adicione este:

exports.login = async (req, res) => {
    const { email, senha } = req.body;

    // 1. Buscar o usuário no banco
    const query = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(401).json({ message: 'Usuário não encontrado!' });

        const usuario = results[0];

        // 2. Comparar a senha enviada com a senha criptografada do banco
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
        if (!senhaCorreta) return res.status(401).json({ message: 'Senha incorreta!' });

        // 3. Gerar o Token JWT (validez de 1 dia)
        const token = jwt.sign(
            { id: usuario.id, tipo: usuario.tipo }, 
            'SECRET_KEY_MUITO_SEGURA', // No futuro, isso vai para um arquivo .env
            { expiresIn: '1d' }
        );

        res.json({ message: 'Login realizado com sucesso!', token });
    });
};