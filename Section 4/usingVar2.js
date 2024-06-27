// OBS: FUJA DO ESCOPO GLOBAL SEMPRE QUE POSSÍVEL
// NOTE: AVOID THE GLOBAL SCOPE WHENEVER POSSIBLE

// Aqui, por ser apenas um bloco de códigos sem nenhuma função definida, o valor num sera substituido para dois, retornando o valor 2 duas vezes
// Here, as it is just a block of code without any defined function, the value num will be replaced by two, returning the value 2 twice
// var num = 1
// {
//     var num = 2
//     console.log("within scope: ", num)
// }
// console.log("out of scope: ", num)

// Dessa forma, existem variáveis com o mesmo nome, mas valores diferentes, mas ainda sim, evite o uso de variáveis globais para que esses malabarismos não precisem ser feitos
// This way, there are variables with the same name but different values, but still, avoid using global variables so that these juggling acts do not need to be done
var num = 1
function count () {
    var num = 2
    console.log("whitin scope: ", num)
}

count();
console.log("out of scope: ", num)