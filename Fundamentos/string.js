const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(2))
console.log(escola.charCodeAt(3)) // Retorna a posição do item na tabela Unicode.
console.log(escola.indexOf('3')) // Retorna o item na posiçao 3.
console.log(escola.substring(1)) // Vai do índice 1 até o fim da string
console.log(escola.substring(0, 3)) // Vai do índice 0 ao 2, não inclui o indice 3

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3, 'e')) // Substitui o número 3 pela letra e

console.log('Ana, Maria, Pedro'.split(',')) // Quebra a string com virgula e cria uma array