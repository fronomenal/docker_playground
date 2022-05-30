const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res)=>{
    db.query("SELECT * FROM shoppers.customers;", (err, rez)=>{
        if (err) throw err;
        res.json(rez);
    });
});

module.exports = router;
