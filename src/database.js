const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',      
  user: 'root',           
  password: 'senai2025',  
  database: 'techwave_store' 
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Erro de conexão:', err.message);
    return;
  }
  console.log('✅ Conectado ao servidor local do MySQL!');
});

module.exports = connection;
