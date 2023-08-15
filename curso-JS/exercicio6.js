// Por qual motivo o código abaixo retorna com erros?

// ele estava tentando ler a primeira variável usando o "var" e as outras variáveis não estavam sendo reconhecidos por so existirem dentro do bloco
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
  }
  
  
  // Como corrigir o erro abaixo?
  const dois = 2;
  function somarDois(x) {
    return x + dois;
  }
  function dividirDois(x) {
    return x + dois;
  }
  console.log(somarDois(4));
  console.log(dividirDois(6));
  
  // O que fazer para total retornar 500?
  
  const numero = 50;

  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }

  const total = 10 * numero;
  console.log(total);