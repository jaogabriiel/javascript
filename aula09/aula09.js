// aula 09 DOM + alterar css
let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipualar CSS'
// titulo.innerHTML = 'Aula de manipulação de CSS' // mesma função do textcontent
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'imagens/gatinho.jpg') // confugura um atributo
imagem.setAttribute('width','250px') // manipulando imagem

// MANIPULAR CSS
// document.querySelector('h1').style.color = "red"
titulo.style.color = "darkblue"
titulo.style.backgroundColor = "lightblue"
titulo.style.borderBottom = "2px solid red"
titulo.style.padding = "8px"
titulo.style.borderRadius = "5px"

let box = document.querySelectorAll('.box')
box[0].setAttribute('class','escura') // atribuindo uma classe
box[0].removeAttribute('class') // remover os atributos

let tela = document.querySelector('main')
let dark = document.querySelector('#btdark')
let light = document.querySelector('#btlight')

dark.addEventListener('click', modoDark) // escutador de eventos, nesse caso o 'click', ao clicar ele executará a função "mododark"
light.addEventListener('click', modoLight)

function modoDark() {
    // event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark"); // add uma nova classe ao main, a classe "dark" que está no CSS
    tela.classList.remove("light"); // remove uma classe
}

function modoLight() {
    // event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark") // remove uma classe
    tela.classList.add("light") // adiciona uma classe
}
