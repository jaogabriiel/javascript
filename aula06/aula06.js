// criar varáveis com let ou var
let produto = 'Arroz'
let quant = 2
let precoUnitario = 4.99
let precoTotal = quant * precoUnitario
document.write(`Preço total do produto ${produto} R$ ${precoTotal}<br>`)

// um objeto "intl" com o método "NumberFormat" -> pt-BR e formata um determinado valor através da função "format"
console.log(new Intl.NumberFormat('pt-BR').format(precoTotal))

// após o .toLocaleString, escrever alguns parâmetros 1°-> localidade; 2°-> objeto com estilo 'cureency', que são dados monetários e em seguida passar a moeda
document.write(`Preço total ${precoTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}<hr>`)

// criar cosntante
const nome = 'João Gabriel'
const peso = 83.5
const altura = 1.75
const imc = peso / (altura * altura)
document.write(`IMC: ${imc} <br>`)
document.write(`IMC: ${imc.toFixed(2)} <br> <hr>`) // limitando as casas decimais

let nota1 = 7.5
let nota2 = 5.5
let nota3 = 4.0
let notaFinal = nota1 + nota1 + nota3
document.write(`Nota final: ${notaFinal} <br>`)