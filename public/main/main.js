const btn = document.getElementById('btn_calcular');
const alerta = document.getElementById('txt_alerta');
const resultado = document.getElementById('txt_resultado');

btn.addEventListener('click', function() {

    let numero = document.getElementById('txt_numero_tabla').value;

    //alerta
   if(!numero)
    { alert("Complete los campos."); return; }

    let tabla = "";
    let i = 1;

    // ciclo do_while
    do {
        tabla += `${numero} x ${i} = ${numero * i}<br>`;
        i++;
    } while (i <= 12);

    resultado.innerHTML = tabla;
});
