const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [10, 4.5, 8, 7.5]


const reprovados = nomes.filter( (aluno, indice)=>notas[indice] < 5)
const reprovadosNota = notas.filter( (notaAluno, indice)=>notas[indice] < 5)

console.log(`Os alunos reprovados são: ${reprovados}(${reprovadosNota})`)