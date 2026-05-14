const db = require('../database');
const bcrypt = require('bcryptjs');

exports.registrar = async (req, res) => {
    const { nome, email, senha } = req.body;
    const senhaHash = await bcrypt.hash(senha, 10);

    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    db.query(query, [nome, email, senhaHash], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Usuário criado com sucesso!' });
    });
};

const jwt = require('jsonwebtoken'); 

exports.login = async (req, res) => {
    const { email, senha } = req.body;

    const query = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(401).json({ message: 'Usuário não encontrado!' });

        const usuario = results[0];
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
        if (!senhaCorreta) return res.status(401).json({ message: 'Senha incorreta!' });

        const token = jwt.sign(
            { id: usuario.id, tipo: usuario.tipo }, 
            'SECRET_KEY_MUITO_SEGURA', // No futuro, isso vai para um arquivo .env
            { expiresIn: '1d' }
        );

        res.json({ message: 'Login realizado com sucesso!', token });
    });
};
