/*
O var pode ser puxado caso ele esteja dessa forma, mas caso esteja dentro de alguma função definida, não é possível puxa-lo
The var can be pulled if it is like this, but if it is within a defined function, it is not possible to pull it
*/
/*
Tome cuidado na hora de criar variáveis globais, porque elas podem ser substituídas em outros momentos, o que pode acarretar erros em seu código ou projeto
Be careful when creating global variables, because they can be replaced at other times, which could lead to errors in your code or project.
*/
{
    {
        {
            var sera = "Sera?"
        }
    }
}
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)