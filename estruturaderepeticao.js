// Exercicio - Estrutura de repetição 

// Percorrer uma lista de nomes, contendo os nomes:
// Lucas, Camila, Eduardo, Fatima e Nilson
// Numero de execução começando em 1 
// Nome que esta sendo executado 
// Separadores

const nomes = ['Lucas', 'Camila', 'Eduardo', 'Fatima', 'Nilson'] // Uma Lista de Dados


nomes.forEach((nome, indice) => {
    console.log('Execução: ', indice + 1)
    console.log('Nome: ' + nome)
    console.log('-------------')
})