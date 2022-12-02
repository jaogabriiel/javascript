let pessoa = {
    nome: 'Edson',
    idade: 40,
    peso: 83.5,
    altura: 1.75,
    doador: false
}

let produtos = {
    descricao : [],
    preco : []
}

const carros = {
    marca: ['Ford', 'Fiat', 'GM'],
    modelo: ['Ka', 'Uno', 'Corsa'],
    ano: [1999, 2005, 2019]
}

// Como acessar uma propriedade usando .
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura

// como acessar as propriedades usando ['']
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']

// operação IMC = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

// .toFixed(x) - limita o número de casas decimais
console.log("IMC " + imc.toFixed(2))

// alterar/atualizar valor de propriedade
pessoa.nome = "João Gabriel"
produtos.descricao = ['Arroz']
produtos.preco = ['4.99']

// usando spreed operator
produtos.descricao = [...produtos.descricao, 'Feijão', 'Trigo']
produtos.preco = [...produtos.preco,9.99, 4.79]

// usando spreed operator em const
carros.marca = [...carros.marca, 'WV']
carros.modelo = [...carros.modelo, 'Fusca']
carros.ano = [...carros.ano, '1979']