var database = require("./database")

database.where({id:3}).table("games").delete().then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err)
})