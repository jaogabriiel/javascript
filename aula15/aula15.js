let form = document.querySelector('form')
let n1 = document.querySelector('#num1')
let n2 = document.querySelector('#num2')
let b1 = document.querySelector('#btn1')
let b2 = document.querySelector('#btn2')
let res = document.querySelector('#resu')

b1.addEventListener('click', function(e){
    let nota1 = n1.value
    let nota2 = n2.value
    let res = (nota1 + nota2 / 2)
})