const mysql = require('mysql2');
const express = require('express');
const app = express();

const connection = mysql.createConnection({
  host: '10.11.209.5',
  user: 'webuser',
  password: 'password',
  database: 'MyDatabase'
});

app.get('/', (req, res) => {
  connection.query('SELECT message FROM MyTable', (error, results) => {
    if (error) throw error;
    res.send(results[0].message);
  });
});

app.listen(80, () => console.log('Server running on port 80'));
