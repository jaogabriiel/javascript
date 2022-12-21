let cxN1 = document.querySelector('#nota1')
let cxN2 = document.querySelector('#nota2')
let cxN3 = document.querySelector('#nota3')
let cxN4 = document.querySelector('#nota4')

let enviar = document.querySelector('#enviar')
let limpar = document.querySelector('#limpar')
let cxSituacao = document.querySelector('#aviso')
let cxMedia = document.querySelector('#media')

function calcular(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4
}

function situacao(mediaFinal) {
    situacao = ''
    if (mediaFinal >= 7) {
        situacao = 'Aprovado'
    } else if (mediaFinal <= 3) {
        situacao = 'Reprovado'
    } else {
        situacao = 'Recuperação'
    }
    return situacao
}

function definirSituacao(situacao) {
    switch(situacao) {
        case 'Aprovado':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            break

        case 'Reprovado':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            break

        case 'Recuperacao':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('recuperacao')
            break
        
        default:
            cxSituacao.textContent = "Impossível definir situação"
    }
}

function validar(num) {
    let nota1 = parseFloat(cxN1.value)
    let nota2 = parseFloat(cxN2.value)
    let nota3 = parseFloat(cxN3.value)
    let nota4 = parseFloat(cxN4.value)

    if (nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0 || nota3 > 10 || nota3 < 0 || nota4 > 10 || nota4 < 0) {
        form.reset()
        aviso.textContent = "Digite um número entre 1 e 10"
        aviso.classList.add('alerta')
        setTimeout(function() {
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 2000)
    }
}

enviar.addEventListener('click', function(e) {
    let num1 = parseFloat(cxN1.value)
    let num2 = parseFloat(cxN2.value)
    let num3 = parseFloat(cxN3.value)
    let num4 = parseFloat(cxN4.value)
    let media = calcular(num1, num2, num3, num4)

    if (isNaN(media || media < 0) || media > 10) {
        cxSituacao.value = ''
    } else {
        cxMedia.value = parseFloat(media)
        cxSituacao.value = situacao(media)
        definirSituacao(situacao(media))
    }
    e.preventDefault()
})

limpar.addEventListener('click', function() {
    cxMedia.textContent = ''
    aviso.classList.remove('aprovado')
    aviso.classList.remove('reprovado')
    aviso.classList.remove('recuperacao')
})