let cxN1 = document.querySelector('#nota1')
let cxN2 = document.querySelector('#nota2')
let cxN3 = document.querySelector('#nota3')
let cxN4 = document.querySelector('#nota4')

let enviar = document.querySelector('#enviar')
let limpar = document.querySelector('#enviar')
let aviso = document.querySelector('#aviso')
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

function cxSituacao(situacao) {
    switch(situacao) {
        case 'Aprovado':
            aviso.textContent = "Aprovado"
            aviso.classList.remove('reprovado')
            aviso.classList.remove('recuperacao')
            aviso.classList.add('aprovado')
            break

        case 'Reprovado':
            aviso.textContent = "Reprovado"
            aviso.classList.remove('aprovado')
            aviso.classList.remove('recuperacao')
            aviso.classList.add('aprovado')
            break

        case 'Recuperacao':
            aviso.textContent = "Recuperação"
            aviso.classList.remove('aprovado')
            aviso.classList.remove('reprovado')
            aviso.classList.add('recuperacao')
            break
        
        default:
            aviso.textContent = "Impossível definir situação"
    }
}

function validar() {
    let nota1 = cxN1.value
    let nota2 = cxN2.value
    let nota3 = cxN3.value
    let nota4 = cxN4.value

    if (nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0 || nota3 > 10 || nota3 < 0 || nota4 > 10 || nota4 < 0) {
        aviso.textContent = "Digite um número entre 1 e 10"
        aviso.classList.add('alerta')
        setTimeout(function() {
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 2000)
    }
}

enviar.addEventListener('click',function(e){
    let num1 = cxN1.value
    let num2 = cxN2.value
    let num3 = cxN3.value
    let num4 = cxN4.value
    let media = calcular(num1, num2, num3,num4)

    if (isNaN(media) || media > 10) {
        cxMedia.textContent = "Informe os núemeros corretamente"
        aviso.textContent = ''
    } else {
        cxMedia.value = parseFloat(media).toFixed(1)
        aviso.textContent = situacao(media)
    }
    e.preventDefault()
}) 

limpar.addEventListener('click', function() {
    cxMedia.textContent = ''
    aviso.classList.remove('aprovado')
    aviso.classList.remove('reprovado')
    aviso.classList.remove('recuperacao')
})