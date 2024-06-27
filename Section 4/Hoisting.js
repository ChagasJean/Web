// Hoisting é basicamente colocar uma variável para cima caso ela não esteja declarada, como ocorre nesse caso
// Hoisting is basically putting a variable up if it is not declared, as in this case
console.log("a: ", a)
var a = 2
console.log("a: ", a)

// No caso do let, já não dá certo
// In the case of let, it no longer works
console.log("b: ", b)
let b = 2
console.log("b: ", b)