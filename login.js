let usuarioAtual;

function registrarUsuario() {
    const nome = document.getElementById('nome').value;
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    const id = Date.now();
    const novoUsuario = new Usuario(id, nome, login, senha);

    let lista_usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    lista_usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(lista_usuarios));
    alert('Usuário registrado com sucesso!');
    window.location.replace('index.html');
}

function loginUsuario() {
    const login = document.getElementById('login-usuario').value;
    const senha = document.getElementById('senha-usuario').value;

    let lista_usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    for (let usuario of lista_usuarios) {
        if (usuario.login == login && usuario.senha == senha) {
            usuarioAtual = new Usuario(usuario.id, usuario.nome, usuario.login, usuario.senha);
        usuarioAtual.carregarTarefas(usuario.tarefas);
        document.getElementById('task-manager').style.display = 'block';
        atualizarListaTarefas();
        document.getElementById('login-todo').innerHTML = '';
        return
        }
    }
    alert('Login ou senha incorretos!');
    
}
