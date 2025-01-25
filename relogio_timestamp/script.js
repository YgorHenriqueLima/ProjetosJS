/*
    aula 129 CFB cursos - JavaScript
    explicação do  algoritmo:
    obter o timestamp / inicial onde a cada segundo será obtido o tempo atual
    cálculo da diferença dos timestemp
    em uma longa contagem de tempo, a contagem será precisa mesmo que o browser seja fechado
    no timer vai ser mostrado a :
    - hora
    - minutos
    - segundos
*/


/*Date.now() - retorna um número de milisegundos desde meia noite de 1 de janeiro de 1970*/

const timer = document.querySelector("p#timer");
const tmp_ini=Date.now();

const contador = () =>{
    const tmp_atual = Date.now();
    let cont = tmp_atual - tmp_ini;
    let seg = (tmp_atual - tmp_ini)/1000;
    timer.innerHTML = converter(seg);
}
const converter=(seg)=>{
    const hora = Math.floor(seg/3600);
    const resto = seg%3600;
    const minuto = Math.floor(resto/60);
    const segundo = Math.floor(resto%60);
    const formatacao = `${hora<10?"0"+hora:hora}:${minuto<10?"0"+minuto:minuto}:${segundo<10?"0"+segundo:segundo}`;
    return formatacao;
}

setInterval(contador,1000);