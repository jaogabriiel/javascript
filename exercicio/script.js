let img = document.querySelector('#gato')
let p = document.querySelector('#principal')
let d  = document.querySelector('#txt')

img.setAttribute('width','250px')

img.addEventListener('click' , clicou)
function clicou() {
    alert("Olha  que gatinho fofinho, não é?")
}

d.addEventListener('click', clicou2)
function clicou2() {
    d.textContent = "Clicou!"
}