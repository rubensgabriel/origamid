window.alert('Isso mesmo');

const href = window.location.href;

console.log(href)

if(href === 'http://192.168.0.106:5500/curso-JS/index.html') {
    console.log('É igual')
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function teste() {
    console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', teste);