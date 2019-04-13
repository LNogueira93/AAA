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