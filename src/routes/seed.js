const db = require("../db");
const router = require("express").Router();

const seedQuery = require("../db/monsters_database");

router.get("/", (req, res)=>{
    db.query(seedQuery, (err, rez)=>{
        if (err) throw err;
        res.json(rez);
    });
});