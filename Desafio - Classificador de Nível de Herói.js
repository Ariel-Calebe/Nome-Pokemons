//  /==============================\
// |   Ariel Calebe - 04/01/2024    |
//  \==============================/
// 
//**O Que deve ser utilizado**
//
//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//
//## Objetivo
//
//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
//
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante
//
//## Saída
//
//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"

let personagem = [
    ["Ariel" , 999999, "semnivel"],
    ["Shaolin" , 899, "semnivel"],
    ["Kratos" , 9890, "semnivel"]
]

for (i = 0 ; i < personagem.length ; i++) {      
    switch (true) {
        case personagem [i][1]  <= 1000:
        personagem [i][2] = "Ferro"
        break

        case personagem [i][1] > 1000 && personagem [i][1] <= 2000:
        personagem [i][2] = "Bronze"
        break

        case personagem [i][1] > 1000 && personagem [i][1] <= 5000:
        personagem [i][2] = "Prata"
        break  

        case personagem [i][1] > 5000 && personagem [i][1] <= 7000:
        personagem [i][2] = "Ouro"
        break

        case personagem [i][1] > 7000 && personagem [i][1] <= 8000:
        personagem [i][2] = "Platina"
        break

        case personagem [i][1] > 8000 && personagem [i][1] <= 9000:
        personagem [i][2] = "Acendente"
        break

        case personagem [i][1] > 9000 && personagem [i][1] <= 10000:
        personagem [i][2] = "Imortal"
        break

        case personagem [i][1] > 10000:
        personagem [i][2] = "Radiante"
        break
    }  
console.log("O Herói de nome " + personagem [i][0] + " está no nível de " + personagem [i][2] + ".")
}
