const salaJS = [7, 8, 8, 7, 10 ,6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => atual + acumulador, 0)
    return somaDasNotas/notasDaSala.length 

}
console.log(`A média da sala JavaScript é: ${mediaSala(salaJS)}`)
console.log(`A média da sala Java é: ${mediaSala(salaJava)}`)
console.log(`A média da sala Python é: ${mediaSala(salaPython)}`)

