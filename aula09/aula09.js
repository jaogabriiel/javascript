// aula 09 DOM + alterar css
let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipualar CSS'
// titulo.innerHTML = 'Aula de manipulação de CSS' // mesma função do textcontent
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', '') // confugura um atributo