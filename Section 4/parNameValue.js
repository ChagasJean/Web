const saudacao = "Opa"

function exec(){
    const saudacao = "Falaa"
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
// Objects are nested groups of name/value pairs
const client = {
    name: "Pedro",
    age: "32",
    adress: {
        street: "Samim",
        neighborhood: "Colégio"
    },
}

console.log(saudacao)
console.log(exec())
console.log(client)