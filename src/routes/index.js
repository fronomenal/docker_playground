const router = require('express').Router();

const seed = require("./seed");
const monsters = require("./monsters");
const habitats = require('./habitats');
const lives = require('./lives');

router.use("/seedDB", seed);
router.use("/monsters", monsters);
router.use('/lives', lives);
router.use('/habitats', habitats);

module.exports = router;
