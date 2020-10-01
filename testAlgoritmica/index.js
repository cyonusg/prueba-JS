const multiplicacion = (a) => (b) => (c) => a * b * c;

const stringMasLargo = (array) => array.reduce((accumulator, currentValue) => {
    let prevValue = typeof accumulator == 'string' ? accumulator.length : accumulator;
    return (currentValue.length > prevValue) ? currentValue: accumulator;
},0);

const multiplicaPalabra = (string, iteraciones) => {
    let stringFinal = string;
    for(let index = 1; iteraciones > index; index++) {
        console.log(`${stringFinal}${string}`);
        stringFinal = `${stringFinal}${string}`;
    }
    return stringFinal
}

const traerApellidos = (contacts) => contacts.map(i => i.lastName);

const numerosUnicos = (array1,array2) => {
    let finalArray = array1;
    array2.forEach(element => {
        if(!array1.some(i => element == i )){
            finalArray.push(element);
        }
    });
    return finalArray;
}

//Ejercicio 1 
console.log(multiplicacion(2)(5)(3),'Argumentos: 2 , 5 , 3');
console.log(multiplicacion(4)(2)(2),'Argumentos: 4 , 2 , 2');
console.log(multiplicacion(8)(2)(1),'Argumentos: 8 , 2 , 1');

//Ejercicio 2
const list = ['best', 'company','ever'];
console.log(stringMasLargo(list),`Array utilizado: ${list}`);

//Ejercicio 3
console.log(multiplicaPalabra('node', 5), 'numero de repeticiones: 5')
console.log(multiplicaPalabra('abc', 2), 'numero de repeticiones: 2')

//Ejercicio 4 
const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }]
console.log(traerApellidos(contacts));

//Ejercicio 5
console.log(numerosUnicos([1, 2, 5], [2, 1, 6]))
console.log(numerosUnicos([1, 2, 3], [4, 5, 6]))