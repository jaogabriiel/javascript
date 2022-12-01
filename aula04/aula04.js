let produtos = ['Arroz','Feijão','Leite']
var codigos = Array(10, 20, 30)
var test = Array(10)
test[0] = "oi"
test[9] = "Tudo bem?"
test[10] = "Opa!"
let meses = ['Jan','Fev','Mar','Abr']
meses[0] = "Janeiro"

//ADICIONAR "push" no final = empurre
produtos.push('Açucar')
codigos.push(40, 50, 60)
meses.push('Mai','Jun','Ago','07')

// REMOVER do final pop = estourar
produtos.pop()
codigos.pop()
meses.pop()

// ADICIONAR no inicio = unshift
produtos.unshift('Uva','Maçã')

// REMOVER do inicio = shift
produtos.shift()

// REMOVER de uma posiçãi específica
// splice = emendar
// posição inicial, quantos remover
codigos.splice(1, 3)

// COPIAR array slice = fatiar porção
// posição inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0, 3)

// VER O TAMANHO DO ARRAY length = comprimento
meses.length
meses1.length
meses2.length

// spreed operator ...copiar
let teste = [...produtos, 'Ovo', 'Pera']