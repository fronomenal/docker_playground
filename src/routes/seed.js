const res = require("express/lib/response");
const db = require("../db");
const router = require("express").Router();

const seedQuery = require("../db/monsters_database");

adb = db.promise();

router.get("/", (req, res, next)=>{

    let errs = [];

    seedQuery.forEach( async (stmt, i, queries)=> {
        try {
            await adb.query(stmt);
            errs[i] = null;
        } catch (error) {
            errs[i] = error;
        }  

        if (errs.length == queries.length){
            let flag = errs.every( (e) => {
                e == null;
            });
            
            if (flag){
                res.json({msg: "Seeded table", status: 200});
            } else {
                msg = errs.filter( (e)=> e != null).map( (e)=> e.message);
                res.status(500).json(msg);
            }
        }

    });
    

});

module.exports = router;