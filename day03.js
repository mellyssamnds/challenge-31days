// Exercícios Práticos 
// Dia 02/31 - Booleanos

/* Verifique se um número é maior que 10 e menor que 20. */

var num = 18;
if (num > 10 && num < 20) {
    console.log("Numero digitado é maior que 10 e menor que 20");
}

/* Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16. */

var idade = 17;

if (idade >= 16) {
    console.log("Você está apto a votar");
} else {
    console.log("Você ainda não tem a idade mínima para votar");
}

/* Implemente um sistema de notas onde:
    - Notas >= 90: "Aprovado com A"
    - Notas >= 70 e < 90: "Aprovado com B"
    - Notas < 70: "Reprovado". */

let nota = 72;
if (nota >= 90) {
    console.log("Aprovado com A");
} else if (nota >= 70 && nota < 90) {
    console.log("Aprovado com B");
} else {
    console.log("Reprovado");
}

/* Crie uma variável `saldo` e verifique:
    - Se `saldo > 0`: Mostre "Saldo positivo".
    - Se `saldo === 0`: Mostre "Sem saldo".
    - Caso contrário, mostre "Saldo negativo". */

    let saldo = 500;
    if (saldo > 0) {
        console.log("Saldo positivo");
    } else if (saldo === 0) {
        console.log("Sem saldo");
    } else {
        console.log("Saldo negativo");
    }

/* Use o operador `!` para verificar se uma luz está apagada e ligue-a. */

let estaAcesa = false;
if (!estaAcesa) {
    console.log("Luz acesa");
}
