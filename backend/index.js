const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

server.get("/", (req, res)=> {
    res.send("Memorabilia Shop API");
});

server.get("/products", (req, res)=> {
    res.send([1, 2, 3, 4]); // placeholder
});

const port = process.env.PORT || 8787;

server.listen(port, console.log(`Server running on port ${port}`)); 

