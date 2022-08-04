const cliente = {
    nome: "Diego",
    idade: 28,
    cpf: "12185984764",
    email: "diie.tavares@gmail.com",
}

console.log(`Meu nome é ${cliente.nome} e minha idade é ${cliente.idade}`)

console.log(`O 3 primeiros números do meu CPF são: ${cliente.cpf.substring(0,3)}`)