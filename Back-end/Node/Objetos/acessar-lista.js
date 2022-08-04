const cliente = {
    nome: "Diego",
    idade: 28,
    cpf: "12185984764",
    email: "diie.tavares@gmail.com",
}

const chaves = ["nome", "idade", "cpf", "email"]

// console.log(cliente[chaves[0]])

chaves.forEach(info=>console.log(cliente[info]))

