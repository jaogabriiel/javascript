// Aula 13 - Estruturas de repetição
let carros = ['Fusca', 'Brasília', 'Gurgel']

// FOR = para faça
// i = iterador, interação ou index
for (let i = 1; i <= 5; i++) {
    document.write(i + " " + "<br>")
}

// i = iterador, interação ou index
for (let i = 5; i >= 1; i--) {
    document.write(i + " ")
}

for (let i = 0; i < carros.length; i++) {
    document.write(`<li>${carros[i]}</li>`) // carros[0], carros[1]...
}

// FOREACH = para cada
let frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Melancia']

frutas.forEach(function(fruta, i) { // elemento que desejo mostrar e depois o índice
    document.write(`${i} ${fruta} <br>`)
})

carros.forEach(function(carro) {
    document.write(`${carro} <br>`)
})

// WHILE - enquanto
// criar variável de contador fora do laço
let contador = 0
while(contador < frutas.length) {
    console.log(frutas[contador])
    contador++
}
// aqui o contador está com o valor 5, pois saiu do laço
console.log(contador)

// DO WHILE faça enquanto
// criar variável de contador fora do laço
let iterador = 0

do {
    console.log(carros[iterador])
    iterador++
} while (iterador < carros.length)

// aqui o iterador está com o valor 3
console.log(iterador)
