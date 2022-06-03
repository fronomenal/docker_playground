const router = require("express").Router();
const db = require("../db");

router.route("/")
.post((request, response, next) => {
    const { name, climate, temperature } = request.body;

    if (!name && !climate && !temperature) response.status(400).json({msg: "Provide the name, climate and temperature fields", status: 400});
    if (!name) response.status(400).json({msg: "Provide name field", status: 400});
    if (!climate) response.status(400).json({msg: "Provide climate field", status: 400});
    if (!temperature) response.status(400).json({msg: "Provide temperature field", status: 400});

    db.query("INSERT INTO habitats(name, climate, temperature) VALUES(?, ?, ?);"
    , [name, climate, temperature], (err, res) =>{
        if (err) return next(err);

        response.status(201).json({msg: `succesfully created habitat: ${name}`, status: 201});
    });
}).get((request, response, next) => {
    db.query("SELECT * FROM habitats ORDER BY id;", (err, rez) =>{
        if (err) return next(err);

        response.json(rez);
    });
});

module.exports = router;

