const express = require('express');
const db = require('./database');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API TechWave Store conectada ao banco de dados!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const authRoutes = require('./routes/authRoutes');

app.use(express.json()); // Essencial para o Postman funcionar!
app.use('/auth', authRoutes); // Todas as rotas de auth começarão com /auth


const produtoRoutes = require('./routes/produtoRoutes');
app.use('/produtos', produtoRoutes);