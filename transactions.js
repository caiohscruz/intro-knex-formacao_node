const database = require("./database")

async function TransactionTest(){
    try{
        await database.transaction(async trans => {
            await database.insert({name: "Frajola"}).table("animal");
            await database.insert({name: "Pernalonga"}).table("animal");
            await database.insert({name: "Brutos"}).table("animal");
        });
    }catch(err){
        console.log(err)
    }
}

TransactionTest();