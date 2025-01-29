function adicionarTarefa() {
    const tarefaInput = document.getElementById('tarefa')
    const novaTarefa = tarefaInput.value
    const listaTarefa = document.getElementById('lista-tarefas')

    if (novaTarefa !== "") {
        const li = document.createElement('li')
        const checkbox = document.createElement('input')
        const label = document.createElement('label')

        checkbox.type = 'checkbox'
        label.textContent = novaTarefa

        li.appendChild(checkbox)
        li.appendChild(label)
        listaTarefa.appendChild(li)

        document.getElementById('novaTarefa').value = ''
    }  

}

/*

if (novaTarefa !== "") {
        const itemLista = document.createElement('li')
        const checkbox = document.createElement("input")
        itemLista.textContent = novaTarefa
        listaTarefa.appendChild(itemLista)
        tarefaInput.value = ""
        checkbox.type = "checkbox"
        itemLista.appendChild(checkbox)
    } 

*/