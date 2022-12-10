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
        case 'Aprovado':
            cxSituacao.classList.remove('reprovado')
    }
}