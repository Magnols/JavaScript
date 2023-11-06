/*Remover ultima nota*/
const notas = [10, 6.5, 8, 10, 7];

notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média é ${media}.`);