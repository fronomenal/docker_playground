const router = require('express').Router();
const db = require('../db');

router.post('/', (request, response, next) => {
    const { name, climate, temperature } = request.body;

    if (!name && !climate && !temperature) res.status(400).json({msg: "Provide the name, climate and temperature fields", status: 400});
    if (!name) res.status(400).json({msg: "Provide name field", status: 400});
    if (!climate) res.status(400).json({msg: "Provide climate field", status: 400});
    if (!temperature) res.status(400).json({msg: "Provide temperature field", status: 400});

    db.query('INSERT INTO habitats(name, climate, temperature) VALUES(?, ?, ?);'
    , [name, climate, temperature], (err, res) =>{
        if (err) return next(err);

        response.redirect('/habitats');
    });
}).get((request, response, next) => {
    db.query('SELECT * FROM habitats ORDER BY id;', (err, rez) =>{
        if (err) return next(err);

        response.json(rez);
    });
});

module.exports = router;

