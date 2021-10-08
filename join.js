const database = require("./database")

database.select(["owner.name as owner", "animal.name as animal"]).table("owner").innerJoin("animal", "owner.id", "animal.owner").then(data => {
    data.forEach(element => {
        console.log(`${element.animal} é animal de ${element.owner}`)
    });
}).catch(err => {
    console.log(err);
})