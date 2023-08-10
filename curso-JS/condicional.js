if((5 - 5) && (5 + 5)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso')
}

var condicional = (5 - 10) && (5 + 5);
if(condicional) {
    console.log('Verdadeiro', condicional);
} else {
    console.log('Falso');
}

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2);
console.log(condicional2)

var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    case 'Verde':
        console.log('Olhe para a floresta.');
        break;
    default:
        console.log('Feche os olhos')
}