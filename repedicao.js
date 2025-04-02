// repetição por array 

// array.forEach(element => {
// });

const cidades = ['João Pessoa', 'Brasilia', 'São Paulo', 'Recife', 'Bruxelas']
//cidades [0]
//cidades [1]

cidades.forEach((elemento, index) => {
    //console.log('Execução numero: ' +index)
    //console.log(elemento)
})

// for normal 
// for (let index = 0; index < 10; index < 10; index++) {
//}

for (let indice = 0; indice < cidades.length; indice++) {
    console.log(cidades[indice])
}