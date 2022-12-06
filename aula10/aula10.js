// aula 10 - funções no js
let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelectorAll('box')

// funções sem parâmetros e sem retorno (procedure)
function olaMundo() {
    document.write('Hello, World sem retorno<br>')
}

// funções sem parâmetros e com retorno (function)
function olaMundo2() {
    return 'Hello, World com retorno<br>'
}

// CHAMAR FUNÇÃO = executá-la
olaMundo() // chamando as funções
document.write(olaMundo2()) // precisamos escrever o comando de saída, pois o 'return só retorna uma string, e não a saída'

let x = 2
let y = 1
let mensagem = 'Jesus Cristo é o salvador.'

// funções com parametrôs e sem retorno (function)
function somar(a, b) {
    document.write((a + b) + "<br>")
}

// funções com parâmetros e com retorno
function somar2 (c, d) {
    return c + d + "<br>"
}

// CHAMAR A FUNÇÃO = executá-la
somar(x, y) // passando os parâmetros da função somar
somar(10, 5) // idem

document.write(`<p>${somar2(x, y)}</p>`)
document.write(`<p>${somar2(5, 2)}</p>`)

// FUNÇÃO ANÔNIMA = não tem nome, pode ou não ter parâmetros, pode ou não ter retornos
titulo.addEventListener('click', function(){
    console.log('Clicou no título')
})

// arrow functions ES6 2015 em diante 
const nomeFuncao = () => {
    // as chaves só são obrigatórias quando for executado mais de uma ação
}

const olaMundoArrow = () => document.write("Hello, World!!!!")

// não precisa utilizar a palavra function
// não precisa usar a palavra return
// não se usa nome na função
// não precisa colocar {} se for só uma instrução
const olaMundo2Arrow = () => '<p>Hello, World com arrow function</p>'

olaMundoArrow() // chamada da função
document.write(olaMundo2Arrow())