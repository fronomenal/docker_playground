const app = require("../server");

const seed = require("./seed");
const monsters = require("./monsters");

app.use("/seed", seed);
app.use("/monsters", monsters);

module.exports = router;
