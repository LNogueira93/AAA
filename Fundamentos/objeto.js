// JSON (JavaScript Object Notation). É um formato textual
// Objeto é uma coleção de chaves e valores

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 80.0
}

prod2.Desconto = 0.5
prod2.TotalDesconto = prod2.preco * prod2.Desconto
prod2.ValorTotal = prod2.preco - prod2.TotalDesconto

console.log(prod2)