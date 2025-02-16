class Tarefa {
    constructor(id, titulo, descricao, data, concluido = false) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = new Date(data);
        this.concluido = concluido;
    }
}

class Usuario {
    constructor(id, nome, login, senha, tarefas = []) {
        this.id = id;
        this.nome = nome;
        this.login = login;
        this.senha = senha;
        this.tarefas = tarefas;
    }
    
    adicionarTarefa(titulo, descricao, data) {
        const id = this.tarefas.length + 1;
        const tarefa = new Tarefa(id, titulo, descricao, data);
        this.tarefas.push(tarefa);
    }

    removerTarefa(id) {
        this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
    }

    marcarConcluido(id) {
        const tarefa = this.tarefas.find(t => t.id === id);
        if (tarefa) {
            tarefa.concluido = !tarefa.concluido;
        }
    }

    filtrarTarefas(inicio, fim) {
        const dataInicio = new Date(inicio);
        const dataFim = new Date(fim);
        return this.tarefas.filter(t => t.data >= dataInicio && t.data <= dataFim);
    }


    carregarTarefas(ta = []) {
        const tarefas = ta || [];
        this.tarefas = tarefas.map(t => new Tarefa(t.id, t.titulo, t.descricao, t.data, t.concluido));
    }

    obterRelatorio() {
        return this.tarefas;
    }
}
