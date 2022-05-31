const router = require('express').Router();
const db = require('../db');

router.get('/', (request, response, next) => {
    db.query('SELECT * FROM creatures ORDER BY id;', (err, rez) => {
        if (err) return next(err);
        response.json(rez);
    });
}).post((request, response, next) => {
    const { name, personality, home } = request.body;

    if (!name && !personality && !home) res.status(400).json({msg: "Provide the name, personality and home fields", status: 400});
    if (!name) res.status(400).json({msg: "Provide name field", status: 400});
    if (!personality) res.status(400).json({msg: "Provide personality field", status: 400});
    if (!home) res.status(400).json({msg: "Provide home field", status: 400});

    db.query('INSERT INTO creatures(name, personality) VALUES (?,?);',[name, personality],
    (err) => {
        if (err) return next(err);

        response.redirect('/creatures');
    });
});

router.get('/:id', (request, response, next) => {
    const {id} = request.params;
    db.query('SELECT * FROM creatures WHERE id=?;',[id], (err, rez) => {
        if (err) return next(err);
        response.json(rez);
    });
}).put((request, response, next) => {
    const {id} = request.params;

    //elements must be declared in order for pattern matching to work
    const { name, personality, home } = request.body;
    const fields = [name, personality, home]; 

    let match = 0;
    let args = {id, name, personality, home};
    fields.forEach((el, i) => {
        if (el) {
            match += 2**i;
        }
    })

    if (!match) res.status(400).json({msg: "Must include a field to patch", status: 400});

    let strQuery = '';
    switch(match){
        case 1:
            strQuery = "UPDATE creatures SET name=:name WHERE id=:id;"; break;
        case 2:
            strQuery = "UPDATE creatures SET personality=:personality WHERE id=:id;"; break;
        case 3:
            strQuery = "UPDATE creatures SET name=:name, personality=:personality WHERE id=:id;"; break;
        case 4:
            strQuery = "UPDATE creatures SET home=:home WHERE id=:id;"; break;
        case 5:
            strQuery = "UPDATE creatures SET name=:name, home=:home WHERE id=:id;"; break;
        case 6:
            strQuery = "UPDATE creatures SET personality=:personality, home=:home WHERE id=:id;"; break;
        case 7:
            strQuery = "UPDATE creatures SET name=:name, personality=:personality, home=:home WHERE id=:id;"; break;
    };

    db.query(strQuery, args, (err) => {
        if (err) return next(err);
    
        response.redirect('/creatures')
    });

});

router.delete('\id', (request, response, next) => {
    const {id} = request.params;

    db.query('DELETE FROM creatures WHERE id=?;', [id], (err) => {
        if (err) return next(err);

        response.redirect('/creatures');
    })
})


module.exports = router;