const database = require("./database")

database.select([
        "owner.name as owner_name", 
        "animal.name as animal_name"
    ])
    .table("owner_has_animal")
    .innerJoin("owner", "owner.id", "owner_has_animal.owner_id")
    .innerJoin("animal", "animal.id", "owner_has_animal.animal_id")
    .then(data => {
        console.log(data)
    })