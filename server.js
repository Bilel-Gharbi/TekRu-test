const express = require("express");
const loader = require("./config/loader");
const { PORT } = require("./config");

const { db } = require("./config/database");

//init express server
const app = express();

//we load all app middleware exp : "cors , morgan , json ...."
loader(app);

//run the server
app.listen(PORT, () => console.log(`App listening on port ${PORT} !`));
