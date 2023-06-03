const express = require("express");
const app = express();
const router = require('../src/routes/main.js');

require("../src/db/conn.js");

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(router);

app.listen(port, ()=> console.log(`Node running on http://localhost:${port}`))