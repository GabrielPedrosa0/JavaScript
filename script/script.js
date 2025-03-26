function calcular() {
    let txtir = document.getElementById('txtir')
    let res = document.getElementById('res')
    let pais = String(txtir.value)
    if (pais == 'Brasil') {
        res.innerHTML = '<p>Você é <strong>Brasileiro</strong></p>'
    } else {
        res.innerHTML += '<p>Você é <strong>Estrangeiro</strong>'
    }

    let txtod = document.getElementById('txtod')
    let resod = document.getElementById('res-od')
    let paisod = String(txtod.value)
    if (paisod != 'Brasil') {
        resod.innerHTML = `<p>Você está indo para um país <strong>Estrangeiro</strong>` 
    }
}
