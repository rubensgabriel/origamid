var quadrado = {
    lados: 4,
    area(lado) {
        return lado * 2
    },
    perimetro(lado) {
        return lado * 4
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random);

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        this.height / 2;
    }
}

menu.backgroundColor = '#000';
menu.color = 'blue'

menu.esconder = function() {
    console.log('Escondi')
}
var bg = menu.backgroundColor;