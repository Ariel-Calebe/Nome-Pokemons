//  /==============================\
// |   Ariel Calebe - 01/01/2024    |
//  \==============================/
//
// DESAFIO SURPRESA
// 
// Crie um código para armazenar o máximo de informações possível dos pokemon da imagem ao lado e ao final, para cada um, 
// exiba uma mensagem de saída escrita o nome do pokemon concatenado com "Cadastrado com sucesso".

let pokemon = [
    // Nome      Lvl Sexo  PVAtual PVTotal
    ["Poochyena", 2, "Macho", 13, 13],
    ["Zigzagoon", 2, "Fêmea", 13, 13],
    ["Dragonite", 5, "Macho", 25, 25],
    ["Dragonite", 5, "Fêmea", 24, 24],
    ["Dragonite", 5, "Fêmea", 25, 25],
    ["Poochyena", 2, "Fêmea", 15, 15],
    ["Wurmple", 2, "Macho", 7, 14]
]

for (let i = 0 ; i < pokemon.length ; i++){
    console.log(pokemon [i] [0] + " cadastrado com sucesso")
}
