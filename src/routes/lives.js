const router = require('express').Router();
const db = require('../db');

//router.post();

router.get("/:id", (request, response, next) => {
    const {id} = request.params;

    db.query("SELECT creatures.name AS monster, habitats.name AS home FROM creatures JOIN habitats ON creatures.home = habitats.id WHERE creatures.id = ?;", [id], (err, rez) =>{
        if (err) return next(err);

        if (!rez[0]) {
            response.status(404).json({msg: "No monster with provided id", status: 404});
        } else {
            response.status(200).json(rez[0]);
        }  
    });
});
router.get("/", (request, response, next) => {
    db.query('SELECT creatures.name AS monster, habitats.name AS home FROM creatures, habitats WHERE creatures.home = habitats.id;', (err, rez) => {
        if (err) return next(err);

        response.json(rez);

    });
    
});

module.exports = router;