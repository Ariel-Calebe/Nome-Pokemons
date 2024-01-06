//  /==============================\
// |   Ariel Calebe - 06/01/2024    |
//  \==============================/
// 
//**O Que deve ser utilizado**
//
//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções
//
//## Objetivo:
//
//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
//
//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal
//
//## Saída
//
//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

let personagem = [
    ["Ariel" , 999999 , 0 , "default"],
    ["Shaolin" , 10 ,  5 , "default"],
    ["Kratos" , 120 , 21 , "default"]
]

function calculatorRanked(victorys, defeats) {
    return victorys - defeats
}


for(let i = 0 ; i < personagem.length ; i++) {
    let informationCalculatorRanked = calculatorRanked(personagem [i][1] , personagem [i][2])   
    
    switch(true) {    
        case informationCalculatorRanked < 10 :
        personagem [i][3] = "Ferro"
        break
        
        case informationCalculatorRanked <= 20 :
        personagem [i][3] = "Bronze"
        break

        case informationCalculatorRanked <= 50 :
        personagem [i][3] = "Prata"
        break

        case informationCalculatorRanked <= 80 :
        personagem [i][3] = "Ouro"
        break

        case informationCalculatorRanked <= 90 :
        personagem [i][3] = "Diamante"
        break

        case informationCalculatorRanked <= 100 :
        personagem [i][3] = "Lendário"
        break

        case informationCalculatorRanked > 100 :
        personagem [i][3] = "Imortal"
        break
    }
    console.log(`O Herói tem de saldo de ${informationCalculatorRanked} e está no nível de ${personagem [i][3]}.`)
}