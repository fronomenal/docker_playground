api = require("./server");

const PORT = process.env.PORT || 9090;

api.listen(PORT, ()=>{
    console.log(`listening on port : ${PORT}`)
})