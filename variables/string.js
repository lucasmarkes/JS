var message = 'Ola Mundo';
// - não é recomendavel utilizar pq não tem block scope(existe varias possibilidades de acessar estas variáveis)

console.log(message);

const x = 10
// - não consegue alterar depois

let a = 10
// - consegue alterar depois

//Document Object Model - DOM:
// - plataforma para interagir com o HTML

// - window é o objeto global do browser
// - document é o objeto global do HTML

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');

// O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. 
// A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
console.log(words[3]);
// expected output: "fox"