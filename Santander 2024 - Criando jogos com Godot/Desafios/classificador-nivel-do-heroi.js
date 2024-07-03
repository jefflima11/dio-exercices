let nome = `Snake Norato`;
let qtdXp = 5000;
contador = 0;

let nivel = [
  'Ferro',
  'Bronze',
  'Prata',
  'Ouro',
  'Platina',
  'Ascendente',
  'Imortal',
  'Radiante',
];
let xpNivel = [1000, 2000, 5000, 7000, 8000, 9000, 10000];

for (let i = 0; i < xpNivel.length; i++) {
  if (qtdXp <= xpNivel[i]) {
    console.log(`Nome: ${nome}, Nível: ${nivel[i]}`);
    break;
  }
}