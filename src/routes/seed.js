const res = require("express/lib/response");
const db = require("../db");
const router = require("express").Router();

const seedQuery = require("../db/monsters_database");

adb = db.promise();

router.get("/", (req, res, next)=>{
    seedQuery.forEach( async (statement)=> {
        try {
            await adb.query(statement);
        } catch (error) {
            //ignoring errors. Problem with asynchronous execution of multiple statements in the same request body
        }  
    });
    res.json({msg: "Seeding table", status: 102});
});

module.exports = router;