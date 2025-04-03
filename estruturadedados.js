// Exercicio - Estrutura de Dados 

// Percorrer uma lista de cidades 
// Contendo Varias Cidades 
// Para cada item, verificar se a cidade João Pessoa na lista 
// Printar Nome da Cidade 
// Caso seja, avisar
// Caso NÃO seja o elemento procurado, avisar 
// Numero de execução

const cidades = ['João Pessoa', 'Brasilia', 'São Paulo', 'Recife', 'Bruxelas']

cidades.forEach((cidade, indice) => {
    console.log('Execução: ', indice + 1)
    console.log('Cidade: ', cidade)

if (cidade == 'João Pessoa') {
    console.log('Condição Atendida!')
} else {
    console.log('Condição NÃO Atendida')
}

})