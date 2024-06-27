function rand({ min = 0, max = 1000}){
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

const random = { max: 50, min: 40 }
console.log(rand(random))

const minimum = {min: 900}
console.log(rand(minimum))

const maximum = {max: 10}
console.log(rand(maximum))