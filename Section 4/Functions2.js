/*
Armazenando uma função em uma variável
Storing a function in a variable
*/
const printSum = function (a,b) {
    console.log(a + b)
}
printSum(2,3)

/*
Armazenando uma função arrow em uma variável
Storing an arrow function in a variable
*/
const sum = (a,b) => {
    return a + b
}
console.log(sum(2,3))