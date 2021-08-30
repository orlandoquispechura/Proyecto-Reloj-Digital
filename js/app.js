const mostrarReloj = () => {
  let fecha = new Date();
  let hora = formatoHora(fecha.getHours());
  let min = formatoHora(fecha.getMinutes());
  let seg = formatoHora(fecha.getSeconds());

  
  document.getElementById('hora').innerHTML = `${hora}:${min}:${seg}`;
  console.log(`${hora}:${min}:${seg}`);

  const meses = ['Ene', 'Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  const dias = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
  const anio = ['2020','2021','2022','2023'];
  
  let diaSemana = dias[fecha.getDay()];
  let dia = fecha.getDate();
  let mes = meses[fecha.getMonth()];
  let year = fecha.getFullYear();

  let fechaTexto = `${diaSemana}, ${dia},${mes},${year}`;
  document.getElementById('fecha').innerHTML = fechaTexto;

  document.getElementById('contenedor').classList.toggle('animacion');

};

const formatoHora = (hora)=>{
    if (hora<10)
        hora = '0' + hora;
        return hora;
}

setInterval(mostrarReloj, 1000, 0);

