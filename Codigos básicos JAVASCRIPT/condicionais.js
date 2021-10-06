// -------------------------------------------------------------------------------------------------------- //

let ativo = true
let mensagem = ""

if (ativo) {
    mensagem = "Show de bola"
}
else {
    mensagem = "Não deu certo"
}

console.log(mensagem)

// -------------------------------------------------------------------------------------------------------- //

let sinalDeTransito = "amarelo"
let acao = ""


if (sinalDeTransito == "verde") {
    acao = "passar"
}
else if (sinalDeTransito == "amarelo") {
    acao = "atenção"
}
else {
    acao = "parar"
}

console.log(acao)

// -------------------------------------------------------------------------------------------------------- //

let mesAtual = "abril"
let numeroMes = 0

switch (mesAtual) {

    case "janeiro":
        numeroMes = 1
        break

    case "fevereiro":
        numeroMes = 2
        break

    case "março":
        numeroMes = 3
        break

    case "abril":
        numeroMes = 4
        break
    
    case "maio":
        numeroMes = 5
        break

    case "junho":
        numeroMes = 6
        break
    
    default:
        numeroMes = 0

}

console.log(numeroMes)

// -------------------------------------------------------------------------------------------------------- //