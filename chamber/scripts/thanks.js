const currentUrl = window.location.href;

const everything = currentUrl.split('?');

let formData =  everything[1].split('&');

var fechaCodificada = show('timestamp');

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
<p><b>Your Name:</b> ${show("fname")} ${show("lname")}.</p>
<p><b>Your Email:</b> <a href="${show('email')}">${show('email')}</a>.</p>
<p><b>Your Phone:</b> ${show('phone')}</p>
<p><b>Business Name:</b> ${show('organization')}.</p>
<p>You filled out this form on  ${formatFechaHora(fechaCodificada)}</p>

`;



function formatFechaHora(fechaCodificada) {
    var fechaDecodificada = decodeURIComponent(fechaCodificada);
    var fecha = new Date(fechaDecodificada);
    var dia = fecha.getUTCDate();
    var mes = fecha.getUTCMonth() + 1; 
    var año = fecha.getUTCFullYear();
    var horas = fecha.getUTCHours();
    var minutos = fecha.getUTCMinutes();
    mes = mes < 10 ? '0' + mes : mes;
    dia = dia < 10 ? '0' + dia : dia;
    var fechaFormateada = `${mes}/${dia}/${año} at ${horas}:${minutos < 10 ? '0' + minutos : minutos}`;
    return fechaFormateada;
}


function show(information) {
    formData.forEach((element) => {
        if (element.startsWith(information)) {
            result = element.split('=')[1].replace("%40", "@")
        }
    })
    return(result);
}
