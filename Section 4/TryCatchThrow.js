function HandleErrorThrow(error){
    //throw true
    //throw 10
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date
    }
}

function printNameUpperCase(obj){
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e){
        HandleErrorThrow(e)
    } finally {
        console.log("Final")
    }
}

//const obj = { name: 1 }
/*
  nome: 'TypeError',
  msg: 'obj.name.toUpperCase is not a function',
  date: 2024-07-01T20:47:00.444Z
*/

const obj = { name: "Jean" }
printNameUpperCase(obj)