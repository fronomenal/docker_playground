const db = require("../db");
const router = require("express").Router();

router.get("/", (req, res)=>{
    db.query("SELECT CURDATE();", (err, rez)=>{
        if (err) throw err;
        res.json(rez);
    });
})

module.exports = router;