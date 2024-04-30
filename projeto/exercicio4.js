// Verifique a distância da primeira imagem
// em relação ao topo da página

const imagem = document.querySelector('img')
console.log(imagem.offsetTop)

// Retorne a soma da largura de todas as imagens

const largura = document.querySelectorAll('img')
console.log(largura)
largura.forEach(img => {
    console.log(img.width)
});

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu