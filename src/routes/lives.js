const router = require('express').Router();
const db = require('../db');

//router.post();

router.get('/:id', (request, response, next) => {
    const {id} = req.params;

    db.query('SELECT monsters.id, monsters.name, habitats.name FROM monsters JOIN habitats ON monsters.home = habitats.id WHERE monsters.id = ?;', [id], (err, rez) =>{
        if (err) return next(err);

        response.json(rez);
    });
});
router.get('/', (request, response, next) => {
    db.query('SELECT * FROM monsters, habitats WHERE monsters.home = habitats.id;', (err, rez) => {
        if (err) return next(err);

        response.json(rez);
    });
});

module.exports = router;