const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 9090;
const options = {
    definition: {
        openapi: "3.0.0",
        info:{
            title: "Monsters API",
            version: "1.3.0",
            description: "Serves monsters and their habitats"
        },
        servers: [{url: `http://localhost:${PORT}`}]
    },
    apis: [`${__dirname}/docs/*.js`]
}
const specs = swaggerJsDoc(options)

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use((err, req, res, next)=>{
    res.status(400).json({msg: `Invalid JSON body: ${err.message}`, status: 400});
});

app.use("/", routes);

app.use((err, req, res, next) => {
    res.status(400).json(err.message);
})

app.use("/", swaggerUI.serve, swaggerUI.setup(specs));

app.all('*', (req, res) => {
    res.status(404).json({err: "Invalid route", status: 404})
});

module.exports = app;
