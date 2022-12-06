// aula 10 - funções no js
let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelector('box')

// funções sem parâmetros e sem retorno (procedure)
function olaMundo() {
    document.write('Hello World sem retorno<br>')
}

// funções sem parâmetros e com retorno (function)
function olaMundo2() {
    return 'Hello World com retorno'
}