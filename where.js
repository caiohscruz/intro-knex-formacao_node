var database = require("./database")

database.where({id:3}).table("games").then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err)
})

var query = database.where({id:3}).orWhere({name:"teste"}).table("games")

console.log(query.toQuery())

query = database.whereRaw("price > 30").table("games")

console.log(query.toQuery())