function calcular() {
let idade = document.getElementById('id')
let resultado = document.getElementById('resultado')
let num = Number(idade.value)
resultado.innerHTML = ''

resultado.innerHTML += `Você tem <strong>${num} anos</strong> <br>`


    if (num < 18) {
        resultado.innerHTML += `<strong>Você não é de Maior</strong>`
    } else {
        resultado.innerHTML += `<strong>Você é de Maior</strong>`
    }
}