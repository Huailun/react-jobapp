const express = require('express');
// Initialize the app
const app = express();
//const bodyParser = require('body-parser');
const mysql      = require('mysql');
const config = require('config');

const port = process.env.PORT || 5000;
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host     : config.host,
  user     : config.user,
  password : config.password,
  database : config.database
});


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// https://expressjs.com/en/guide/routing.html
//app.get('/posts', function (req, res) {
  //connection.connect();

  //connection.query('SELECT * FROM posts LIMIT 0, 10', function (error, results, fields) {
    //if (error) throw error;
    //res.send(results)
  //});

  //connection.end();
//});

// Start the server
app.listen(port, () => console.log(`Listening on port ${port}`));





