const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',      // Significa que o banco está no SEU computador
  user: 'root',           // Usuário padrão do MySQL
  password: 'senai2025',  // A senha que você definiu quando instalou o MySQL
  database: 'techwave_store' // O nome do banco que criamos no passo anterior
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Erro de conexão:', err.message);
    return;
  }
  console.log('✅ Conectado ao servidor local do MySQL!');
});

module.exports = connection;