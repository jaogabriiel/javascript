// Aula 15 - aplicação calculadora de Média

let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

// selecionar caixas de texto por id
let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

// calcular media
function calcularMedia (n1, n2) {
    return (n1 + n2) / 2
}

// definir situação final com base na média
function situacaoFinal (mediaFinal) {
    let situacaoFinal = ''

    if (mediaFinal >= 7) {
        situacaoFinal = 'Aprovado(a)'
    } else if (mediaFinal <= 3) {
        situacaoFinal = 'Reprovado(a)'
    } else {
        situacaoFinal = 'Recuperação'
    }
    return situacaoFinal
}

// formatar caixa de situação final
function formatarSituacao (situacaoFinal) {
    console.log('Situação Final ' + situacaoFinal)
    switch(situacaoFinal) {

        case 'Aprovado(a)':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperação')
            cxSituacao.classList.add('aprovado')
            console.log('adicionar classe aprovado')
            break

        case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperação')
            cxSituacao.classList.add('reprovado')
            console.log('adicionar classe reprovado')
            break

        case 'Recuperação':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('recuperacao')
            console.log('adicionar classe recuperação')
            break

        default:
            console.log('Situação indefinda')
    }
}

// validar e gerar flash message
function validarNumero(numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value
    if (num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
        formulario.reset() // limpar form
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function(){ // função que age com o tempo definido
            aviso.textContent = '' // remove o texto de aviso
            aviso.classList.remove('alerta') // remove a classe
        }, 2000) // após 2 segundos
    }
}

// CALCULAR MÉDIA APÓS O CLICK NO BOTÃO
btnCalcular.addEventListener('click', function(e) {
    console.log('Calcular média')
    // pegar o valor que está dentro da caixa
    // usar o métodp parseFloat p converter string p float
    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let media = calcularMedia(nota1, nota2)

    console.log(nota1)
    console.log(nota2)
    console.log(media)

    if (isNaN(media) || media < 0) {
        console.log('Não é um número')
        cxSituacao.value = ''
    } else {
        cxMedia.value = parseFloat(media)
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }
    e.preventDefault()
})

// APÓS TIRAR AS CLASS DA CX SITUAÇÃO
btnLimpar.addEventListener('click', function() {
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperação')
})