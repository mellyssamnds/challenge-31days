// Exercícios Práticos 
// Dia 02/31 - Condicionais

/* Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável `hora`. */

let hora = 10;

if (hora < 12) {
  console.log("Bom dia! O sol já nasceu lá na Fazendinha");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}
console.log()

/* Use um `switch` para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.). */

let mes = 10;

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    default:
        console.log("Dezembro");      

}
console.log()

/* Crie um programa que verifica se uma pessoa pode dirigir. 
Use a variável `idade` e mostre "Pode dirigir" ou "Não pode dirigir". */

let idade = 18;
let mensagem = idade >= 18 ? "Pode dirigir!" : "Não pode dirigir!";

console.log(mensagem);
console.log()

/* Use o operador ternário para verificar se uma variável `saldo` é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo". */

let saldo = 18;
let verificaSaldo = saldo > 0 ? "Saldo positivo" : "Saldo negativo!";

console.log(verificaSaldo);
console.log()

/*  Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero". */

let numero = -2;

if (numero < 0) {
  console.log("Negativo");
} else if (numero == 0) {
  console.log("Zero");
} else {
  console.log("Positivo");
}
console.log()

/* Crie um sistema de opções para um caixa eletrônico: 
"1 - Sacar", "2 - Depositar", "3 - Saldo". 
Use `switch` para processar a escolha. */

var opcoes = 1;
switch (opcoes) {
    case 1:
        console.log("Sacar");
        break;
    case 2:
        console.log("Depositar");
        break;
    default:
        console.log("Saldo");
}
