const express = require('express');
//const bodyParser = require('body-parser');
const mysql      = require('mysql');
const config = require('config');
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host     : config.host,
  user     : config.user,
  password : config.password,
  database : config.database
});

// Initialize the app
const app = express();

// https://expressjs.com/en/guide/routing.html
app.get('/posts', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM posts LIMIT 0, 10', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

    connection.end();
});
// Start the server
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/posts to see posts');
});
