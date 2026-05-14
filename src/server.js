const cors = require('cors'); // 1. Importa primeiro
const express = require('express');
const db = require('./database');
const app = express();
const PORT = 3000;

// --- CONFIGURAÇÕES (MIDDLEWARES) ---
app.use(cors()); // 2. Libera o acesso logo no começo!
app.use(express.json()); 
app.use(express.static('public')); // 3. Avisa ao Node para servir a pasta do seu site

// --- ROTAS ---
app.get('/', (req, res) => {
    res.send('API TechWave Store conectada ao banco de dados!');
});

const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

const produtoRoutes = require('./routes/produtoRoutes');
app.use('/produtos', produtoRoutes);

// --- INICIALIZAÇÃO ---
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});