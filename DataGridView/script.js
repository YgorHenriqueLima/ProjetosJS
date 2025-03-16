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
    fetch(configDGV.endpoint)
    .then(res=>res.json())
    .then(res=>{
        res.forEach(element => {
            const dgvLinha = document.createElement("tr");
            dgvLinha.setAttribute("class","dgvLinha");

            const c1 = document.createElement("td");
            c1.setAttribute("class","c1");
            c1.innerHTML = `${element.id}`;
            dgvLinha.appendChild(c1);

            const c2 = document.createElement("td");
            c2.setAttribute("class","c2");
            c2.innerHTML = `${element.produto}`;
            dgvLinha.appendChild(c2);

            const c3 = document.createElement("td");
            c3.setAttribute("class","c3");
            c3.innerHTML = `${element.marca}`;
            dgvLinha.appendChild(c3);

            const c4 = document.createElement("td");
            c4.setAttribute("class","c4");
            c4.innerHTML = `${element.modelo}`;
            dgvLinha.appendChild(c4);

            const c5 = document.createElement("td");
            c5.setAttribute("class","c5");
            c5.innerHTML = `D E V`;
            dgvLinha.appendChild(c5);

            dgvDados.appendChild(dgvLinha);
            
            console.log(res)
            
        });
    });
}

DataGridView(configDGV);

/**
 *  <tr class="dgvLinha">
                <td class="c1">01</td>
                <td class="c2">Processador</td>
                <td class="c3">Intel</td>
                <td class="c4">I7</td>
                <td class="c5">D E V</td>
            </tr>
 * 
 * */ 