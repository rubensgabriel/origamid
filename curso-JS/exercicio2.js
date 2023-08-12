// Crie uma função para verificar se um valor é Truthy
function verificaTrue (valor) {
        return !!valor
}
console.log(verificaTrue(5))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calculaPerimetro (lado) {
    return lado * 4
}

console.log(calculaPerimetro(5))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome
}

console.log(nomeCompleto('Rubens', 'Rodrigues'))

// Crie uma função que verifica se um número é par
function verificaPar (num) {
    if (num%2 == 0){
        return 'É par'
    } else {
        return 'É Ímpar'
    }
}

console.log(verificaPar(6))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificaTipo (argumento) {
    return typeof(argumento)
}

console.log(verificaTipo('k'))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function () {
    console.log('Rubens Gabriel')
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));