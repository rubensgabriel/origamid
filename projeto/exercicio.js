// Retorne no console todas as imagens do site

// Retorne no console apenas as imagens que começaram com a palavra imagem

// Selecione todos os links internos (onde o href começa com #)

// Selecione o primeiro h2 dentro de .animais-descricao

// Selecione o último p do site

const imagens = document.querySelectorAll('img')
console.log(imagens)

const imagensAnimais = document.querySelectorAll('img[src ^= "img/imagem"]')
console.log(imagensAnimais)

const linksInternos = document.querySelectorAll('[href ^= "#"]')
console.log(linksInternos)

const h2Animais = document.querySelector('.animais-descricao h2')
console.log(h2Animais)

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1])