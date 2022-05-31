const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use((err, req, res, next)=>{
    res.status(400).json({msg: `Invalid JSON body: ${err.message}`, status: 400});
});

app.use('/', routes);

app.use((err, req, res, next) => {
    res.status(400).json(err);
})

app.all('*', (req, res) => {
    res.status(404).json({err: "Invalid route", status: 404})
});

module.exports = app;
