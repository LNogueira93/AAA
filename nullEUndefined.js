const a = {name: 'Teste'}

console.log(a)

const b = a // Atribuição por refência, a variável B acessa o mesmo endereço de memória que a variável A
b.name = 'Opa'
console.log(b)
console.log(a)

let c = 3
let d = c // Cópia por valor, pois estamos usando tipos primitivos da linguagem
d++
console.log(d)
console.log(c)

let valor // não inicializada
console.log(valor)
valor = null // Null, ausência de valor. Não aponta pra nenhum endereço de memória
console.log(valor)

// Sempre configurar como Null quando quiser zerar o valor de uma variável.

// console.log(valor.toString())

const produto = {}
console.log(produto.preco)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco para deletar atributo do objeto
console.log(produto)
produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)