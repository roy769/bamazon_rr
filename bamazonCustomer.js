var mysql = require('mysql');
var inquirer = require("inquirer");

function purchase(item_id)
{
  console.log(item_id);
//  return;
}

function begin()
{
  var done_string = "Test";
  inquirer.prompt(
  [
    {
      name: "item_id",
      type:"input",
      message: "which id do you wanna purchase?"
    },
    {
      name: "stock_quantity",
      type:"input",
      message: "how many?"
    }
  ])
  .then(
  //if answer <= stock_quantity run purchase function
  //then update database
  );
  //else try a different amount
}

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
//diplay product table on CL
