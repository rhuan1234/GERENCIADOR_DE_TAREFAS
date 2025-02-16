function adicionarTarefa() {
    const titulo = document.getElementById('titulo-tarefa').value;
    const descricao = document.getElementById('descricao-tarefa').value;
    const data = document.getElementById('data-tarefa').value;

    if (titulo && descricao && data) {
        usuarioAtual.adicionarTarefa(titulo, descricao, data);
        atualizarListaTarefas();
        limparFormulario();
    } else {
        alert('Preencha todos os campos!');
    }
}

function removerTarefa(id) {
    usuarioAtual.removerTarefa(id);
    atualizarListaTarefas();
}

function marcarConcluido(id) {
    usuarioAtual.marcarConcluido(id);
    atualizarListaTarefas();
}

function filtrarTarefas() {
    const inicio = document.getElementById('filtro-inicio').value;
    const fim = document.getElementById('filtro-fim').value;
    const tarefasFiltradas = usuarioAtual.filtrarTarefas(inicio, fim);
    ExibeFiltroTarefas(tarefasFiltradas);
}

function atualizarListaTarefas(tarefas = null) {
    const lista = document.getElementById('lista-tarefas');
    lista.innerHTML = '';
    const tarefasParaExibir =  usuarioAtual.obterRelatorio();

    tarefasParaExibir.forEach(tarefasParaExibir => {
        const li = document.createElement('li');
        li.textContent = `${tarefasParaExibir.titulo} - ${tarefasParaExibir.data.toLocaleDateString()} - ${tarefasParaExibir.concluido ? 'Concluído' : 'Não Concluído'}`;
        
        const removerBtn = document.createElement('button');
        removerBtn.textContent = 'Remover';
        removerBtn.onclick = () => removerTarefa(tarefasParaExibir.id);

        const concluirBtn = document.createElement('button');
        concluirBtn.textContent = tarefasParaExibir.concluido ? 'Desmarcar' : 'Marcar como Concluído';
        concluirBtn.onclick = () => marcarConcluido(tarefasParaExibir.id);

        li.appendChild(removerBtn);
        li.appendChild(concluirBtn);
        lista.appendChild(li);
    });
}

function limparFormulario() {
    document.getElementById('titulo-tarefa').value = '';
    document.getElementById('descricao-tarefa').value = '';
    document.getElementById('data-tarefa').value = '';
}

function ExibeFiltroTarefas(tarefa) {
    const lista = document.getElementById('filtro-tarefas');
    lista.innerHTML = '';
    const tarefasParaExibir =  tarefa;

    tarefasParaExibir.forEach(tarefasParaExibir => {
        const li = document.createElement('li');
        li.textContent = `${tarefasParaExibir.titulo} - ${tarefasParaExibir.data.toLocaleDateString()} - ${tarefasParaExibir.concluido ? 'Concluído' : 'Não Concluído'}`;
        
        const removerBtn = document.createElement('button');
        removerBtn.textContent = 'Remover';
        removerBtn.onclick = () => removerTarefa(tarefasParaExibir.id);

        const concluirBtn = document.createElement('button');
        concluirBtn.textContent = tarefasParaExibir.concluido ? 'Desmarcar' : 'Marcar como Concluído';
        concluirBtn.onclick = () => marcarConcluido(tarefasParaExibir.id);

        li.appendChild(removerBtn);
        li.appendChild(concluirBtn);
        lista.appendChild(li);
    });
}

function SalvarDeslogar(){
    let lista_usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let cont = 0
    for (let usuario of lista_usuarios) {
        if (usuario.id == usuarioAtual.id) {
            lista_usuarios[cont] = usuarioAtual
            localStorage.setItem('usuarios', JSON.stringify(lista_usuarios));
            location.reload()
        }
        cont++
    }
}