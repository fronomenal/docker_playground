const router = require("express").Router();
const res = require("express/lib/response");
const db = require("../db");

router.route("/")
.post((request, response, next) => {
    const { id, name, climate, temperature } = request.body;

    if (!name && !climate && !temperature) {response.status(400).json({msg: "Provide the name, climate and temperature fields", status: 400}); return;}
    if (!name) {response.status(400).json({msg: "Provide name field", status: 400}); return;}
    if (!climate) {response.status(400).json({msg: "Provide climate field", status: 400}); return;}
    if (!temperature) {response.status(400).json({msg: "Provide temperature field", status: 400}); return;}
    if (!id) {response.status(400).json({msg: "Provide id field", status: 400}); return;}

    db.query("INSERT INTO habitats(id, name, climate, temperature) VALUES(?, ?, ?, ?);"
    , [id, name, climate, temperature], (err, res) =>{
        if (err) return next(err);

        response.status(201).json({msg: `succesfully created habitat: ${name}`, status: 201});
    });

}).get((request, response, next) => {
    db.query("SELECT * FROM habitats ORDER BY id;", (err, rez) =>{
        if (err) return next(err);

        response.json(rez);
    });
});

router.get("/:id", (request, response) => {
    const {id} = request.params;

    db.query("SELECT * FROM habitats WHERE id = ?", [id], (err, rez)=> {
        if (err) return next(err);
        
        if (!rez[0]) {
            response.status(404).json({msg: "No habitat with provided id", status: 404});
        } else {
            response.status(200).json(rez[0]);
        }  
    });
});

module.exports = router;

