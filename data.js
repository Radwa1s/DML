const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Radwaradwa",
  database: "orders",
});

//connect to db
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("mysql connected");
});

app.post("/insertproducts", (req, res) => {
  let broduct = req.body;
  let sql = "INSERT INTO products SET ?";
  broduct.map((broductName) => {
    db.query(sql, broductName, (err) => {
      if (err) {
        throw err;
      }
    });
  });
  console.log("product added");
  res.end();
});

app.get("/deleteproducss", (req, res) => {
  let sql = "DELETE FROM products WHERE product_name='ASUS notebook'";
  db.query(sql, (error) => {
    if (error) {
      console.log(error.message);
      throw error;
    }
  });
  console.log("delete products");
  res.end();
});
app.post("/insertmanypoducts", (req, res) => {
  let broduct = req.body;
  let sql = "INSERT INTO products SET ?";
  broduct.map((broductName) => {
    db.query(sql, broductName, (err) => {
      if (err) {
        throw err;
      }
    });
  });
  console.log("product added");
  res.end();
});

app.post("/insertcustomers", (req, res) => {
  let customer = req.body;
  let sql = "INSERT INTO customers SET ?";
  customer.map((customerName) => {
    db.query(sql, customerName, (err) => {
      if (err) {
        throw err;
      }
    });
  });
  console.log("product added");
  res.end();
});

app.post("/insertorders", (req, res) => {
  let order = req.body;
  let sql = "INSERT INTO orders SET ?";
  order.map((orderin) => {
    db.query(sql, orderin, (err) => {
      if (err) {
        throw err;
      }
    });
  });
  console.log("product added");
  res.end();
});
app.listen(port, () => {
  console.log("server running " + port);
});
