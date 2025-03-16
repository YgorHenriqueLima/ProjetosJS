/*
    passos:
    javascript vai adicionar o conteúdo ao dataGridView que vai estar previamente construído no HTML
    depois para ara a ideia de módulo, onde todo o html seja construído pelo m´odulo 
*/
/*objeto de configuração do DataGridView*/

const configDGV ={
    endpoint:"produtos.json",
    idDestino:"dgv_dados",
}

const DataGridView=(configdgv)=>{
    const dgvDados = document.getElementById(configDGV.idDestino);
    dgvDados.innerHTML = "";
    /*  Buscando os dados do endpoint produtos.json */
    fetch(configDGV.endpoint)
    .then(res=>res.json())
    .then(res=>{
        res.forEach(element => {
            const dgvLinha = document.createElement("tr");
            dgvLinha.setAttribute("class","dgvLinha");

            /*SIMPLIFICANDO O CÓDIGO
                primeiro criando uma constante que tem as colunas dentro de uma array
            */
           
            const colunas = ["id","produto","marca","modelo"];
            
            /**
             *  criando um forEach da array coluna para simplificar o código de cada coluna
             */
            colunas.forEach(chave =>{
                const coluna = document.createElement("td");
                coluna.classList.add(`c${chave}`);
                coluna.textContent = element[chave];
                dgvLinha.appendChild(coluna);
            });

            const c5 = document.createElement("td");
            c5.setAttribute("class","c5");
            dgvLinha.appendChild(c5);

            /* 
            CRIANDO O ÍCONE DE LIXEIRA PARA APAGAR O DADO NA TABELA 
            */
            const imgDelete = document.createElement("img");
            imgDelete.setAttribute("class","dgvIcone");
            imgDelete.setAttribute("src","./svg/deletar.svg");
            c5.appendChild(imgDelete);

            /*criando o ícone de editar para fazer mudanças nos dados*/

            const imgEditar = document.createElement("img");
            imgEditar.setAttribute("class","dgvIcone");
            imgEditar.setAttribute("src","./svg/editar.svg")
            c5.appendChild(imgEditar);

            const imgExibir = document.createElement("img");
            imgExibir.setAttribute("class","dgvIcone");
            imgExibir.setAttribute("src","./svg/exibir.svg");
            c5.appendChild(imgExibir)

            dgvDados.appendChild(dgvLinha);
            console.log(res);
            
        });
    });
}

DataGridView(configDGV);