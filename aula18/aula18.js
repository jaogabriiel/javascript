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
let moedaCovertida = 0.00

// MENSAGEM FORMATADA PARA EXIBIR VALORES MONETÁRIOS
function mensagemFormatada(moedaCovertida) {
    isNaN(valorEmReal) ? valorEmReal = 0 : ''
    console.log('Moeda convertida ' + moedaCovertida)
    aviso.textContent = "O valor " + (valorEmReal).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'}) + "convertido em " + moedaEstrangeira + " é " + moedaCovertida
}

// VERIFICAR SE FOI DIGITADO O VALOR PARA PODER CONVERTER
function bloquearBotao() {
    if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
        btnConverter.setAttribute('disable', 'disabled')
        btnConverter.style.background = '#ccc'
        btnConverter.style.cursor = 'not-allowed'
    }
}

// REATIVAR O BOTÃO
function ativarBotao() {
    if (valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#ffc107'
        btnConverter.style.cursor = 'pointer'
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

    // USE UMA ESTRUTURA SWITCH CASE para escolher qual moeda estrangeira foi selecionada

    switch(moedaEstrangeira) {

        case 'Dolar':
            moedaCovertida = valorEmReal / valorDoDolar
            mensagemFormatada(moedaCovertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
            break
    
        case 'Euro':
            moedaCovertida = valorEmReal / valorDoEuro
            mensagemFormatada(moedaCovertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
            break
    
        case 'Libra':
            moedaCovertida = valorEmReal / valorDaLibra
            mensagemFormatada(moedaCovertida.toLocaleString('en-GB', { style: 'currency', currency: 'GPB' }))
            break
    
        case 'Bitcoins':
            moedaCovertida = valorEmReal / valorDoBitcoin
            mensagemFormatada(parseFloat(moedaCovertida).toFixed(5))
            break
    
        default:
            aviso.textContent = 'Escolha uma moeda para realizar a conversão'
    }
    isNaN(moedaCovertida) ? moedaCovertida = 0 : ''
})

btnLimpar.addEventListener('click', function() {
    valorDigitado.focus()
    valorDigitado.value = ''
    aviso.textContent = 'Digite um valor, escolha a moeda e realize a conversão'
    moedaSelecionada[0].checked = false
    moedaSelecionada[1].checked = false
    moedaSelecionada[2].checked = false
    moedaSelecionada[3].checked = false
})