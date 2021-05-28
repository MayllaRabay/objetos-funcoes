//Exemplo de input
const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

//Seu código aqui
function corrigirProva (prova) {
    let questoesCertas = 0;
    let nota = 0;
    
    for(questao of prova.questoes) {
        if(questao.resposta === questao.correta) {
            questoesCertas++
            nota += 2;
        };
    }

    console.log(`O aluno(a) ${prova.aluno} acertou ${questoesCertas} quest${questoesCertas === 1 ? "ão" : "ões"} e obteve nota ${nota}.`);
}

corrigirProva(prova);
