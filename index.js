const primeraOpcion='Comillas simples'
const segundaOpcion="Comillas simples"
const terceraOpcion=`Comillas simples`
const direccion='Calle falsa 123'
const ciudad='Springfield'
const direccionCompleta='Mi direccion completa es '+direccion+ciudad
console.log(direccionCompleta)
const direccionCompletaConEspacio='Mi direccion completa es '+direccion+' '+ciudad
console.log(direccionCompletaConEspacio)
const nombre='Estefany'
const pais='ðŸ‡¨ðŸ‡´'
const presentacion=`Hola, soy ${nombre} de ${pais}`
console.log(presentacion)
const primeraParte='Me encanta'
const segundaParte='la gente de'
const terceraParte='ðŸ‡²ðŸ‡½'
const pensamiento=[primeraParte,segundaParte,terceraParte]
console.log(pensamiento.join(' ðŸŒ¯ '))
const hobbie1='correr'
const hobbie2='leer'
const hobbie3='estudiar'
const hobbies='Mis hobbies son: '.concat(hobbie1,', ',hobbie2,', ',hobbie3,'.')
console.log(hobbies)
const escapeAlternativo="I'm Software Engineer"
const escapeBarraInvertida='I\'m Software Engineer'
const escapeComillaInvertida=`I'm Software Engineer`
const poema='Las rosas son rojas,\n'+
'Las violetas son azules,\n'+
'Caracter inesperado,\n'+
'En la linea 86.'
console.log(poema)
const poema2='Las rosas son rojas,\n\
Las violetas son azules,\n\
Caracter inesperado,\n\
En la linea 86.'
console.log(poema2)
const poema3=`Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la linea 86.`
console.log(poema3)