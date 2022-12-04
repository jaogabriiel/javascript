let lutador = "João Gabriel"
let nacionalidade = "Brasileiro"
let idade = 19
let peso = 99.7
let altura = 1.90

document.write(`Lutador: ${lutador}` + "<br>")
document.write(`Nacionalidade: ${nacionalidade}` + "<br>")
document.write(`Idade: ${idade}` + ' anos' + "<br>")
document.write(`Peso: ${peso}` +  ' Kg' + "<br>")
document.write(`Altura: ${altura}` + ' m' + "<br>" + "<hr>")

document.write(`<h2>Frase do dia</h2>` + "<br>");

const dia = 03
const mes = 12
const ano = 2022
const frase = "i know how it feels to be someone who loses their way"
const autor = "Justin Bieber"

document.write(dia + '/' + mes + '/' + ano + '<br>')
document.write(frase + '<br>')
document.write(autor + '<br>' + '<hr>')

let meses = ["Janeiro"," Fevereiro"," Março"," Abril"," Maio"," Junho"," Julho"," Agosto"," Setembro"," Outubro"," Novembro"," Dezembro"]
document.write(`<h2>Array de meses e ano</h2>` + "<br>")
document.write(`${meses}` + "<hr>")

let jogo = {
    jogo: "GTA" ,
    Desenvolvedora: "Rockstar Games" ,
    ano: 2015
}

document.write(`<h2>Jogo</h2>` + "<br>")
document.write("Jogo: " + jogo.jogo + "<br>" + "Desenvolvido por: " + jogo.Desenvolvedora + "<br>" + "Ano de lançamento: " + jogo.ano)