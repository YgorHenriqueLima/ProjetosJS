class Login {
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static login = (mat, pass) => {
        const url = `https://72cb222e-1512-4d72-bb6c-3af8a74d6a4f-00-3a9bsrswkvfme.worf.replit.dev/?matricula=${mat}&senha=${pass}`;
        
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if (res) {
                this.logado = true;
                this.matlogado = mat;
                this.nomelogado = res.nome;
                this.acessologado = res.acesso;
                console.log("Login bem-sucedido:", this.nomelogado);
            } else {
                console.log("Usuário não encontrado");
            }
        })
        .catch(error => console.error("Erro na requisição:", error));
    }
}

export { Login };
