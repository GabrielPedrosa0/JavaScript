function calcular() {
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de <strong>${vel}km/h</strong>`
    if (vel > 60) {
        res.innerHTML += '<p>Você está <strong>MULTADO</strong> por excesso de velocidade'
    }
    res.innerHTML += '<p>Dirija sempre com segurança!'
}