const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const alfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

const textoPagina =
    "Desestabilizou as oportunidades da mulher fenotipicamente negra perpetuando o fascismo. Recusou internalizar as diversidades da mulher branca socialmente privilegiada, em detrimento da pauta antirracial sem entender as vicissitudes sociais que abrangem as minorias pobres e desprivilegiadas, que vivem à margem de uma sociedade cruel e opressora. Tirou o contexto de seus iguais, silenciados pela heteronormatividade patriarcal sendo contraproducente com quem é diferente de você, prestou desacolhimento de seus iguais, silenciados pela heteronormatividade patriarcal para propagar inverdades.";

function sortear(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo)) + minimo;
}

const jogadores = [];
let numeroMinimo = 1;
let totalPaginasLivro;
let numeroJogadores;
let paginaSorteada;
let posicaoLetra;
let letraSorteada;

function Jogador(nome, palpite) {
    this.nome = nome;
    this.palpite = parseInt(palpite);
    this.vencedor = false;
    this.ranking = 0;

    this.definirRanking = function (ranking) {
        this.ranking = ranking;
    };

    this.vencer = function () {
        this.vencedor = true;
    };
}

function contarLetras(texto) {
    const tabela = new Map();
    const textoMaiusculo = texto.toUpperCase(); //Jogar pra fora
    for (let letra of textoMaiusculo) {
        const valorAtual = tabela.get(letra);
        if (valorAtual) {
            tabela.set(letra, valorAtual + 1);
        } else {
            tabela.set(letra, 1);
        }
    }
    return tabela;
}

function verificarQuemGanhou(jogadores, letraSorteada, tabela) {
    let vencedores = [];
    const quantidadeLetraTexto = tabela.get(letraSorteada);
    //obter diferença
    jogadores = jogadores.map((jogador) => {
        jogador.definirRanking(quantidadeLetraTexto - jogador.palpite);
        return jogador;
    });
    //ordenar os jogares por ranking
    let tentativas = 0;
    while (vencedores.length === 0 || tentativas < 100) {
        vencedores = vencedores.concat(
            jogadores.filter((jogador) => {
                if (jogador.ranking < 0) {
                    return jogador.ranking * -1 === tentativas;
                }
                return jogador.ranking === tentativas;
            })
        );
        tentativas = tentativas + 1;
    }
    //obter as pessoas vencedoras
    return vencedores;
}

function cadastrarJogadores() {
    if (numeroJogadores === 0) {
        const tabela = contarLetras(textoPagina);
        const vencedores = verificarQuemGanhou(
            jogadores,
            letraSorteada,
            tabela
        );

        console.log(`Página sorteada: ${paginaSorteada}`);
        console.log(`Letra sorteda: ${letraSorteada}`);
        console.log(
            `Quem venceu foi: ${vencedores
                .map((vencedor) => vencedor.nome)
                .join(", ")}`
        );

        rl.close();
        process.exit(0);
    } else {
        rl.question("Qual é o seu nome ? ", function (nome) {
            rl.question(
                `Olá ${nome}, a letra sorteada é ${letraSorteada}. Qual o seu palpite ? `,
                function (palpite) {
                    const jogador = new Jogador(nome, palpite);
                    jogadores.push(jogador);
                    numeroJogadores = numeroJogadores - 1;
                    cadastrarJogadores();
                }
            );
        });
    }
}

rl.question("Quantos jogadores ? ", function (totalJogadores) {
    rl.question("Qual o total de páginas do livro ? ", function (totalPaginas) {
        numeroJogadores = parseInt(totalJogadores);
        totalPaginasLivro = parseInt(totalPaginas);

        paginaSorteada = sortear(numeroMinimo, totalPaginasLivro);
        posicaoLetra = sortear(numeroMinimo, alfabeto.length);
        letraSorteada = alfabeto[posicaoLetra - 1];

        cadastrarJogadores();
    });
});

//Tabela
/**
 * a - 50
 * b - 35 - 12 = 23 / 5 / 35 / 0
 * c - 0
 * d - 2
 *
 */
