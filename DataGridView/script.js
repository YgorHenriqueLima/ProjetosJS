/*
    passos:

    javascript vai adicionar o conteúdo ao dataGridView que vai estar previamente construído no HTML

    depois para ara a ideia de módulo, onde todo o html seja construído pelo m´odulo 
*/

const configDGV ={
    endpoint:"produtos.json"
}

const DataGridView=(configdgv)=>{
    fetch(configDGV.endpoint)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
    })
}

