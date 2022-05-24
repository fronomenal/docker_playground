const app = require("express")();
const db = require("./db");
const faker = require("faker");

const randName = faker.name.findName();
const randEmail = faker.internet.email();

const PORT = process.env.PORT || 9090;

app.get("/", (req, res)=>{
    db.query("SELECT * FROM shoppers.customers;", (err, rez)=>{
        if (err) throw err;
        res.json(rez);
    });
});

app.listen(PORT, ()=>{
    console.log(`listening on port : ${PORT}`)
})
