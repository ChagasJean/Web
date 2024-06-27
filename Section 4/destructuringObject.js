// É um operador usado para extração
// It is an operator used for extraction

const people = {
    name: "Ana",
    age: 12,
    tel: {
        type: "CEL",
        num: 94567435
    }
}

// As chaves dessa forma é uma destructuring
// The keys this way is a destructuring
const {name, age} = people
console.log(name, age)

// Aqui, estamos extraindo de dentro do objeto e atribuindo outro nome para os atributos, para usar como variáveis
// Here we are extracting from within the object and assigning another name to the attributes, to use as variables
const {name: n, age: a} = people
console.log(n, a)

const {surname, hair = true} = people
console.log(surname, hair)

// Aqui estamos extraindo atributos de um objeto dentro de outro objeto
// Here we are extracting attributes from an object inside another object
const { tel: {type, num} } = people
console.log(type, num)