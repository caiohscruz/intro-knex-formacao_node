const database = require("./database")

database.select(["owner.name as owner", "animal.name as animal"]).table("owner").innerJoin("animal","owner.id","animal.owner").then(data=> {
    console.log(data);
}).catch(err =>{
    console.log(err);
})