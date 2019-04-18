function rand({ min = 10, max = 100}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 78, min: 2}
console.log(rand(obj))