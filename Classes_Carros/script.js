class Carro{
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    //comportamentos / métodos
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }

    toString() {
        return `Nome: ${this.nome}, Portas: ${this.portas}`;
    }

}


class Militar extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao        
        this.ligar()
    }
    atirar=function(){
        if(this.municao > 0){
            this.municao--
            console.log(`Atirando! munição restante: ${this.municao}`)
        }else{
            console.log("sem munição")
        }
    }

    toString() {
        return `Nome: ${this.nome}, Portas: ${this.portas}, Blindagem: ${this.blindagem}, Munição: ${this.municao}`;
    }
}

const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const f_tipoNormal = document.querySelector("#f_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const carros = document.querySelector(".carros")
const btn_addCarro = document.querySelector("#btn_addCarro")
let array_carros = []



const RemoverCarro=(quem)=>{
    array_carros=array_carros.filter((el)=>{
        return el.nome != quem
    })
}

/*caso clique no tipo militar, será permitido ao usuário interagir com os campos de blindagem e de munição*/
f_tipoMilitar.addEventListener("click",(evt)=>{
    f_nome.value = ""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})

/*caso clique no tipo normal, ele vai habilitar o bloqueio do uso dos campos blindagem e munição*/
f_tipoNormal.addEventListener("click",(evt)=>{
    f_nome.value = ""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
})


btn_addCarro.addEventListener('click', (evt)=>{
    /**verificação de qual carro esta sendo selecionado**/
    if(f_tipoNormal.checked){
        const c = new Carro(f_nome.value, f_portas.value)
        array_carros.push(c)
    }else{
        const c = new Militar(f_nome.value, f_portas.value,f_blindagem.value, f_municao.value)
        array_carros.push(c)
    }
    gerenciarExibicaoCarros()
})



/*esta função vai mostrar os carros que serão adicionados automaticamente com o forEach*/
const gerenciarExibicaoCarros=()=>{
    carros.innerHTML = ""
    /*adicionando um novo carro a partir do molde
        <div class="carro">nome_do_carro</div>
    */
    array_carros.forEach((c)=>{
        const div = document.createElement("div")
        const btn = document.createElement("button")
        
        btn.addEventListener('click',(evt)=>{
            const QuemRemover = evt.target.parentNode.dataset.nome
            RemoverCarro(QuemRemover)
            console.log(array_carros)
            gerenciarExibicaoCarros()
        })

        div.setAttribute("data-nome",c.nome)
        div.setAttribute("class", "carro")
        div.innerHTML = `${c.toString()}`

        btn.innerHTML = "remover"
        carros.appendChild(div)
        div.appendChild(btn)
    })
}
