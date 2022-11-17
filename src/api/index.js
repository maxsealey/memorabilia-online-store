const express = require("express");
const cors = require("cors");

const products = require("../data/products");

const server = express();

server.use(express.json());
server.use(cors());

server.get("/", (req, res)=> {
    res.send("Memorabilia Shop API");
});

server.get("/products", (req, res)=> {
    res.send(products);
});

const port = process.env.PORT || 8787;

server.listen(port, console.log(`Server running on port ${port}`)); 

