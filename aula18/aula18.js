// AULA 18 CONVERSOR DE MOEDAS

// SELECIONAR OS ELEMENTOS
let valorDigitado = document.querySelector('#valorEmReal')

// selecionar os elenmentos radios (criar um array deles)
let moedaSelecionada = document.getElementsByName('moedaEstrangeira')

let aviso = document.querySelector('#aviso')

// selecionar os botões
let btnConverter = document.querySelector('#btnConverter')
let btnLimpar = document.querySelector('#btnLimpar')

// COTAÇÕES DIA 14/12/22
let valorDoDolar = 5.28
let valorDoEuro = 5.63
let valorDaLibra = 6.55
let valorDoBitcoin = 94129.92
let valorEmReal = 0

let moedaEstrangeira = ''
let moedaCovertida = ''

// MENSAGEM FORMATADA PARA EXIBIR VALORES MONETÁRIOS
function mensagemFormatada(moedaCovertida) {
    isNaN(valorEmReal) ? valorEmReal = 0 :
    console.log('Moeda convertida ' + moedaCovertida)
    aviso.textContent = "O valor " + (valorEmReal).toString('pt-Br', {style: 'currency', currency: 'BRL'}) + "convertido em " + moedaEstrangeira + " é " + moedaCovertida
}

// VERIFICAR SE FOI DIGITADO O VALOR PARA PODER CONVERTER
function bloquearBotao() {
    if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
        btnConverter.setAttribute('disable', 'disabled')
        btnConverter.style.background = '#ccc'
        btnConverter.style.cursos = 'not-allowed'
    }
}

// REATIVAR O BOTÃO
function ativarBotao() {
    if (valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#ffc107'
        btnConverter.style.cursos = 'pointer'
    } else {
        console.log('Não ativou')
    }
}

// VERIFICAR QUAL BOTÃO RADIO ESTA MARADO checked ou checked == true
// vincular a verificação a um evento, click no botão converter
btnConverter.addEventListener('click', function() {
    // fazer o parseFloat dos dos valores monetários (converter string para float)
    valorEmReal = parseFloat(valorDigitado.value)

    console.log('Escolha a moeda estrangeira')
    for (let i = 0; i < moedaSelecionada.length; i++) {
        if (moedaSelecionada[i].checked) {
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        }
    }
})