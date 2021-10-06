// AND, OR, NOT

var email = "demetrio.comp@compasso.com.br"
var senha = 1234

if (email == "demetrio.comp@compasso.com.br" && senha == 1234) {
    console.log("Login com sucesso")
}
else {
    console.log("Dados inválidos")
}

if (email == "demetrio.comp@compasso.com.br" || senha == 1234) {
    console.log("Login com sucesso")
}
else {
    console.log("Dados inválidos")
}

if (!senha == 1234) {
    console.log("Login com sucesso")
}
else {
    console.log("Dados inválidos")
}