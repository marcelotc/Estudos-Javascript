// operador .. res(juntar)/spread(espalhar)
// usar rest com parâmetros de função

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 123213.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)