for (var num = 0; num < 4; num++) {
    console.log(num)
}

var i = 0;
while (i < 10) {
    console.log(i);
    i = i + 5;
}

var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

// Retorna o ultimo valor do array e remove ele de lá
//var ultimoItem = videoGames.pop();

for (var item = 0; item < 4; item++) {
    console.log(videoGames[item]);
    if(videoGames[item] === 'PS4') {
        break;
    }
}

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function(fruta, index) {
    console.log(fruta, index, frutas)
})