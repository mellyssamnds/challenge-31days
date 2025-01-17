// Exercícios Práticos 
// Dia 01/31 - Variáveis

/* Crie uma variável para armazenar seu nome e outra para sua idade. 
Imprima uma frase como: "Meu nome é [nome] e tenho [idade] anos".*/
var nome = 'John Doe'; 
var idade = 22;
console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
console.log("")

/* Declare uma variável para armazenar o preço de um produto e outra para o desconto. 
Calcule o preço final e mostre no console. */ 
var preco = 1000.0;
var desconto = 0.15;
var precoFinal = (preco - (preco * desconto))
console.log(`O preço original é R$ ${preco} e o preço com desconto é R$ ${precoFinal}`)
console.log()

/* Crie um array com três de suas comidas favoritas e exiba a segunda comida na lista. */
const comidasFavoritas = ["Empadão", "Salpicão", "Strogonoff"]
console.log(comidasFavoritas[1])
console.log()

/* Crie um objeto que represente um livro, com propriedades como titulo, autor e ano. 
Mostre no console o título e o autor */
const livro = {
    titulo : "Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros Curiosos",
    autor : "Aditya Bhargava",
    ano: 2017
}
console.log(`O livro ${livro.titulo} foi escrito por ${livro.autor}`)
console.log()

/* Declare uma variável estaLogado com o valor false. 
Depois, mude o valor para true e imprima a mensagem: "Status de login: [valor da variável]". */
var estaLogado = false;
console.log(`Status de login: ${!estaLogado}`)
console.log()

/* Crie uma variável constante chamada PI com o valor 3.14.
Use-a para calcular a área de um círculo com raio 5 e mostre o resultado. */
const PI = 3.14;
const raio = 5;
const area = (PI * (raio * raio))
console.log(`A área do círculo de raio ${raio} cm é ${area} centímetros quadrados`)