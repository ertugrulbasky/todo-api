const morgan = require('morgan');
const express = require('express');
const todoRouter = require('./src/routes/todoRoutes');
const db = require("./src/server")()
const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json())
app.use(morgan("common"))
app.use("/",todoRouter)


app.listen(8000,() => {});