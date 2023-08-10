// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 21
let outraIdade = 26

if (minhaIdade > outraIdade) {
    console.log('É maior')
}
else if (minhaIdade < outraIdade){
    console.log('É menor')
}
else {
    console.log('É igual')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; // False
var empregoFuturo; // False
var dinheiroNaConta = 0; // False

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brasil tem mais habitantes')
} 
else if (brasil == china) {
    console.log('Ambos possuem a mesma quantidade de habitantes')
}
else {
    console.log('China tem mais habitantes')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
// Cão