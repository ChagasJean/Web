console.log(Math.ceil(6.1))

const obj1 = {}
obj1.name = "Ball"
console.log(obj1.name)

function Obj(name){
    // O this é usado para deixar a variável publica, para que possa ser utilizada fora do escopo da função
    // This is used to make the variable public, so that it can be used outside the scope of the function
    this.name = name
}

const obj2 = new Obj("Chair")
const obj3 = new Obj("Table")
console.log(obj2.name)
console.log(obj3.name)