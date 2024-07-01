const printResult = function(assessment) {
    if(assessment > 7){
        console.log("Aprovado!")
    } else if(assessment === 7) {
        console.log("Por pouco, mas aprovado!")
    } else if(assessment < 7) {
        console.log("Reprovado!")
    }
}

printResult(10)
printResult(7)
printResult(5)