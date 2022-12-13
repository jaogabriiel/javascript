// aula 17 de js - Número secreto
let numeroSecreto = 0
//let numeroDeChances = 3
let contador = 1
let min = 1
let max = 10
let situacao = ''

// SELECIONAR OS ELEMENTOS
let inputNumero = document.querySelector('#inputNumero') // input numero
let btnChutar = document.querySelector('#btnChutar') // botao chutar
let aviso = document.querySelector('#aviso')
let musica = document.querySelector('#musicaDeFundo')

function gerarNumeroSecreto() {
    // gerar número secreto
    numeroSecreto = Math.floor(Math.random() * (max - min) + 1) + min
    //console.log(numeroSecreto)
}

function bloquearBtnChutar() {
    btnChutar.setAttribute('disabled', 'disabled')
    btnChutar.style.backgroung = '#ccc'
    btnChutar.style.cursos = 'not-allowed'
}

function ativarBtnChutar() {
    btnChutar.removeAttribute('disabled')
    btnChutar.style.backgroung = '#222'
    btnChutar.style.cursor = 'pointer'
}

function validarNumeroDigitado(numero) {
    if (numero <= 0 || numero > 10) {
        console.log('Tentativa inválida')
        aviso.classList.add('errou')
        mensagemRapida('Você não está sendo um(a) mensalista! Digite um número inteiro entre 1 e 10')
        bloquearBtnChutar()
        inputNumero.value = ''
    }  else {
        console.log('Número válido')
    }
}

// MÉTODOS PARA MANIPULAR MÚSICA
function tocarMusicaDeFundo() {
    musica.play()
}

function ativarDesativarMusica() {
    if (musica.muted) {
        musica.muted = false
    } else {
        musica.muted = true
    }
}

function pausarMusicaDeFundo() {
    musica.pause()
    musica.currentTime = 0
}

function jogar() {
    console.log('Jogando')
    verificarSeAcertou()
}

function mensagemRapida(mensagem) {
    aviso.textContent = mensagem
    setTimeout(function() {
        aviso.textContent = ''
        aviso.classList.remove('acertou')
        aviso.classList.remove('errou')
        inputNumero.value = ''
    }, 3000)
}

function gameOver(situacao) {
    switch (situacao) {
        
        case 'Acertou':
            aviso.classList.add('acertou')
            mensagemRapida("Acertou, o número secreto era " + numeroSecreto)
        break

        case 'Chute maior':
            mensagemRapida('Chute maior que o número secreto')
            aviso.classList.add('errou')
        break
        
        case 'Chute menor':
            aviso.classList.add('errou')
            mensagemRapida('Chute menor que o número secreto')
        break

        default:
            console.log('Informe a situação')
    }
}

function verificarSeAcertou() {
    //pegar o valor do input numero digitado e converter para inteiro
    chute = parseInt(document.querySelector('#inputNumero').value)

    console.log('N° do chute ' + contador)
    console.log('Chute ' + chute)

    if (numeroSecreto === chute) {
        console.log('Acertou')
        situacao = 'Acertou'
        gameOver(situacao)
        gerarNumeroSecreto() // gerar novo numero secreto
    } else if (chute > numeroSecreto) {
        console.log('Chute maior')
        situacao = 'Chute maior'
        gameOver(situacao)
    } else if (chute < numeroSecreto) {
        console.log('Chute menor')
        situacao = 'Chute menor'
        gameOver(situacao)
    } else {
        console.log('Impossível verificar se acertou')
    }
}