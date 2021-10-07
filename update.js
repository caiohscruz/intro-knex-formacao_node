var database = require("./database")

database.where({id:4}).table("games").update({name:"hahaha"}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err)
})