const database = require("./database")

database.select(["name", "price"]).table("games").then(data=> {
    console.log(data);
}).catch(err =>{
    console.log(err);
})