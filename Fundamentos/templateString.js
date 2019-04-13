const nome = 'Rebeca'
const contatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}`

console.log(contatenacao, template)

// Expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)