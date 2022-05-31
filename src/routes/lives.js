const router = require('express').Router();
const db = require('../db');

//router.post();

router.get('/:id', (request, response, next) => {
    const {id} = req.params;

    db.query('SELECT creatures.id, creatures.name AS creature, habitats.name AS home FROM creatures JOIN habitats ON creatures.home = habitats.id WHERE creatures.id = ?;', [id], (err, rez) =>{
        if (err) return next(err);

        response.json(rez);
    });
});
router.get('/', (request, response, next) => {
    db.query('SELECT * FROM creatures, habitats WHERE creatures.home = habitats.id;', (err, rez) => {
        if (err) return next(err);

        response.json(rez);
    });
});

module.exports = router;