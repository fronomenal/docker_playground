const res = require("express/lib/response");
const db = require("../db");
const router = require("express").Router();

const seedQuery = require("../db/monsters_database");

router.get("/", (request, response, next)=>{
        seedQuery.forEach((statement)=> {
            db.query(statement, (err) => {
            if (err)  next(err)
        });
    });
});

module.exports = router;