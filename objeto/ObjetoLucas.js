const pessoas = new Object
pessoas.pessoa1 = { 
    Nome: 'Lucas',
    idade: 25,
    endereço1: {
        Rua: 'ABC',
        Numero: 123
    }
};
pessoas.pessoa2 = {
    Nome: 'Natalia',
    idade: 22,
    endereço2: {
        Rua: 'CBA',
        Numero: 321
}};

pessoas.pessoa3 = {
    Nome: 'João da Neves',
    idade: 45,
    endereço2: {
        Rua: 'BCA',
        Numero: 213
}};

const fabricante = new Object
fabricante.nome = 'Audi'
fabricante.modeloA = 'A7'
fabricante.modeloB = 'A6'
fabricante.modeloC = 'A5'
fabricante.precoA = 98230
fabricante.precoB = 97230
fabricante.precoC = 96230

const carro = new Object
carro.condutores = [pessoas.pessoa1, pessoas.pessoa2, pessoas.pessoa3]
carro.fabricante = fabricante.nome
carro.modelo = fabricante.modeloB
carro.preco = fabricante.precoB
carro.proprietario = pessoas.pessoa1
carro.qdtcondutores = function(){
    return carro.condutores.length;
}
console.log(carro)
console.log(carro.qdtcondutores())
console.log('Existem ' + carro.qdtcondutores() + ' condutores atualmente!')