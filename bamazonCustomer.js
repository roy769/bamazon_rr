function begin()
{
  inquirer.prompt(
  [
    {
      type:"input",
      name: "item_id",
      message: "which id do you wanna purchase?"
    }
  ]);
}

var mysql = require('mysql');
var inquirer = require("inquirer");

var purchasedProducts = []; // array of purchased ids

var connection = mysql.createConnection
({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Insecure',
  database: 'bamazon_DB',
});

connection.connect(function(err)
{
  if (err) throw err;
  begin();
});
//var query = "SELECT * FROM products WHERE item_id ?";
//connection.query(query,{id: item_id})
