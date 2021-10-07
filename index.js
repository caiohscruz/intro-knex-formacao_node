var database =  require("./database")

var dados = {
    name: "Prince of Persia",
    price: "50.67"
}

var query = database.insert(dados).into("games")

console.log(query.toQuery())