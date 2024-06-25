/*
Função sem retorno
Non-return function
*/
function printSum(a, b){
    console.log(a + b)
}
printSum(2,3)

/*
Função com retorno
Function with return
*/

function sum(a, b = 1){
    return a + b
}
console.log((sum(2,3)))
console.log((sum(2)))