function carregou() {
    console.log('Página carregada com sucesso!')
}

function focou() {
    console.log('Foco no título')
}

function rolouPagina() {
    console.log('Página rolando')
}

function focoNoCampo() {
    console.log('Foco no campo de texto')
}

function semFocoNoCampo() {
    console.log('Saiu do campo de texto')
}

let letras = document.querySelector('input[type=text]')
function avisarQueTeclou() {
    let numLetras = 1
    console.log('Está teclando ' + (letras.value.length + numLetras)) // valor do formulário = value
}

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')

// mouseover = a seta do mouse está no elemento
botao1.addEventListener('mouseover', function(){
    console.log('Foco no botão 1')
})

// focusout ou blur quando sai oo foco
botao2.addEventListener('blur', function(){
    console.log('Saiu do botão 2')
})

// 1 clique no mouse
botaoEnviar.addEventListener('click', function(event){
    event.preventDefault() // evitar o comportamento padrão, nesse caso o de enviar e recarregar a página
    console.log('Clicou no botão de enviar')
})