// Let é um escopo mais abrangente de se usar
// Let is a broader scope to use
let num = 1
{
    let num = 2
    console.log("Within scope: ", num)
}

console.log("Out of scope: ", num)