// Trabalhando com DOM 
// Árvore de elementos desde o browser, a Janela do browser, o documento e cada elemento que formam os conteúdos

/*
navigator
window
 location
 document -> html -> head e body
 history
*/

// método de seleção queryslector 
// importante armazenar em uma variável
let titulo = document.querySelector('h1')
//console.log(titulo)

// .textcontent -> serve para acessar ou alterar conteudo de um elemento que foi selecionado

titulo.textContent = "DOM"
console.log(titulo.textContent)

let testando = document.querySelectorAll('.box')
// console.log(testando)
document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)
// testando[0].textContent = "Texto qualquer"

// Existe também outros métodos, mas prefira usar o queryselector 
// document.getElementsByTagName()
// document.getElementById()
// document.getElementsByClassName()

let testTag = document.getElementsByTagName('div') // seleciona todas as div's

let testId = document.getElementById('titulo') // seleciona o primeiro elemento com o id

let testClass = document.getElementsByClassName('box')
