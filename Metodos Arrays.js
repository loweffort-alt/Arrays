// https://www.youtube.com/watch?v=fCvuOyVXUUQ
// Empezamos con Array Filter
// Objetivo: Poder crear un arreglo de igual o menor cantidad de elementos que el arreglo original
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const numerosFiltrados = numeros.filter (x => x >= 3)

console.log(numerosFiltrados)
console.log ("---------------------------------")

// Me devuelve el elemento completo, si estoy iterando un objeto, array, string,etc. me va a devolver todo el elemento
const mascotas = [
    { nombre: 'Puchini', edad: 12, raza: 'perro'},
    { nombre: 'Agente P', edad: 12, raza: 'perro'},
    { nombre: 'Don Gato', edad: 12, raza: 'gato'},
    { nombre: 'Killer Machine', edad: 12, raza: 'gato'},
];

const gatos = mascotas.filter (x => x.raza == 'gato')

console.log(gatos)

console.log ("---------------------------------")
console.log ("---------------------------------")


// Ahora vamos con ARRAY MAP
// Nos permite transformar los elementos de un arreglo; no varía la cantidad de elementos.

// Funcion Suma más optimizada
// function sumarArreglo(numeros) {
//     if (numeros instanceof Array) {
//         let suma = numeros.reduce((acumulador, i) => acumulador + i);

//         return suma;
//     } else {
//         throw TypeError ('El argumento debe ser un arreglo')
//     }
// }

// try {
//     console.log (sumarArreglo([4, 5, 7, 8])); //24
// } catch (e) {
//     console.log(e.message);
// }

// try {
//     console.log(sumarArreglo("[1, 4, 5, 7]")); //error
// } catch (e) {
//     console.log(e.message);
// }

const suma = (ns) => {
    let acumulado = 0;
    for (i = 0; i < ns.length; i++) {
        acumulado += ns[i];
    }
    return acumulado
}

const numero = [1, 3, 6, 7, 8];

//multiplicar *2
const multiplicado = numero.map(x => x * 2 )
console.log (multiplicado)

console.log ("---------------------------------")

//a pares, Con esto vemos q podemos transformarlo en el tipo de dato q querramos
const pareja = numero.map (x => [x, x])
console.log (pareja)

console.log ("---------------------------------")

const animales = [
    { nombre: 'Puchini', edad: 18, raza: 'perro'},
    { nombre: 'Agente P', edad: 10, raza: 'perro'},
    { nombre: 'Don Gato', edad: 11, raza: 'gato'},
    { nombre: 'Killer Machine', edad: 5, raza: 'gato'} 
]
// edad promedio
const edades = animales.map (x => x.edad)
const prom = suma(edades)

console.log (prom / edades.length)

console.log ("---------------------------------")
console.log ("---------------------------------")

// Ahora veremos ARRAY REDUCE
// Una función de reduce recibe 2 elementos, uno q está siendo acumulado y otro es el elemento iterado 

//const reducer = (acumulador, ValorIterado) => NuevoAcumulador 
// const reducido = [].reduce((acc, el) => acc + el, 'acá va el elemento inicial')

// Recordemos q tenemos como constate : const numero = [1, 3, 6, 7, 8]
const result = numero.reduce ((acc, el) => acc + el, 0)
console.log (result)

console.log ("---------------------------------")

const guaumaiu = [
    { nombre: 'Puchini', edad: 18, raza: 'perro'},
    { nombre: 'Agente P', edad: 10, raza: 'perro'},
    { nombre: 'Don Gato', edad: 11, raza: 'gato'},
    { nombre: 'Killer Machine', edad: 5, raza: 'gato'} 
]

// Aprovechando, veremos el metodo find q sirve para encontrar elementos específicos dentro de un array
const encontrar = guaumaiu.find (x => x.nombre == 'Agente P') 
console.log (encontrar)

console.log ("---------------------------------")
// cuando tenemos miles de elementos, el metodo .find no sirve por que se aplicaría en cada iteración ralentizando la ejecución de nuestro código
// Para evitar esto, crearemos un index gracias a reduce
const indexed = guaumaiu.reduce ((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {})
console.log (indexed ['Killer Machine']);

console.log ("---------------------------------")

// quiero: [1, 2, 3, 4, 5]
const anidado = [1, [2, 3], 4, [5]]
const plano = anidado.reduce((acc, el) => acc.concat(el), [])
// Podemos leer este código como:
// Nuestro método de reduce parte con un arreglo vacío, entonces: acc = [], luego lo concatenamos con el primer elemento [1]. 
// ahora acc = [1], luego el elemento es [2, 3], entonces lo concatenamos con [1] así q el accumulador se vuelve [1, 2, 3] y así hasta llegar al último elemento
console.log (plano)

