const elos = [`Ferro`,`Bronze`,`Prata`,`Ouro`,`Diamante`,`Lendário`,`Imortal`]


function calculaRanking (vitorias, derrotas) {
    let resultadoRankeadas = vitorias - derrotas
    let novoElo;
    
    if (resultadoRankeadas < 10) {
        novoElo = elos[0];
    } else if (resultadoRankeadas >= 11 && resultadoRankeadas <= 20) {
        novoElo = elos[1];
    } else if (resultadoRankeadas >= 21 && resultadoRankeadas <= 50) {
        novoElo = elos[2];
    } else if (resultadoRankeadas >= 51 && resultadoRankeadas <= 80) {
        novoElo = elos[3];
    } else if (resultadoRankeadas >= 81 && resultadoRankeadas <= 90) {
        novoElo = elos[4];
    } else if (resultadoRankeadas >= 91 && resultadoRankeadas <= 100) {
        novoElo = elos[5];
    } else {
        novoElo = elos[6];
    }

    console.log(`O Herói tem saldo de ${resultadoRankeadas} vitórias e está no elo ${novoElo}`);
}

calculaRanking(30,20);