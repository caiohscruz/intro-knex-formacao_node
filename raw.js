var database = require("./database")

database.raw("SELECT * FROM games").then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err)
})