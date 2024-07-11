const currentUrl = window.location.href;
console.log(currentUrl);

const everything = currentUrl.split('?');

let formData =  everything[1].split('&');

function show(information) {
    formData.forEach((element) => {
        if (element.startsWith(information)) {
            result = element.split('=')[1].replace("%40", "@")
        }
    })
    return(result);
}

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
<p>Appointment for ${show("first")} ${show("last")}.</p>
<p>Proxy ${show('ordinance')} on ${show('fecha')} in the ${show('location')} Temple.</p>
<p>Your Phone: ${show('phone')}</p>
<p>Your Email: <a href="${show('email')}"></p>
`

