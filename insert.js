const database = require("./database")

var dados = [{
    name: "Game of Thrones",
    price: "59.99"
}, {
    name: "GTA",
    price: "40.57"
}];

database.insert(dados).into("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});