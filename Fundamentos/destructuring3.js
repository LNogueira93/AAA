function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    if (valor % 2 >= 1) {
        console.log(Math.floor(valor) + ' É impar!')
    } else {
        console.log(Math.floor(valor) + ' É par!')
    }
    return Math.floor(valor)
}


const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
const obj2 = { min: 13, max: 23}
console.log(rand(obj2))
// console.log(rand()) Essa linha retorna erro, pois não foi instanciado nenhum objeto!