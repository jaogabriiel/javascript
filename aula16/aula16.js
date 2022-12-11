// aula 16 de JS - dado virtual

// SELECIONAR ELEMENTOS
let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let sorteado = document.querySelector('#sorteado')
let btnSortear = document.querySelector('#btnSortear')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function(){
    // adicionar animação
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    // tocar o efeito sonoro
    dadoRolando.play()

    // ocultar o botão de sortear
    btnSortear.style.display = 'none'

    // usar setTimeout para exeutar as ações após 1.75 segundos
    setTimeout(function() {
        // armazenar o numero sorteado na variável
        numeroSorteado = getRandomInt(1, 6)
        
        // escrever o número sorteado no console
        console.log(numeroSorteado)

        // definir atributo src com base no número
        imgDado.setAttribute('src', 'dado/' + numeroSorteado + '.png')

        // escrever no parágrafo numeroSorteado
        sorteado.textContent = numeroSorteado

        // exibir o botão sortear
        btnSortear.style.display = 'inline-block'

        // retirar a animação
        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')
    }, 1750)
})

// função que gera numero randomico inteiro incluindo mínimo e máximo
function getRandomInt(min, max) {
    min = Math.ceil(min) // arredonda para cima ceil = teto
    max = Math.floor(max) // arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min

}