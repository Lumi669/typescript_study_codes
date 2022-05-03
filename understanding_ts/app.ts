
//example of how to assign type of object, 
// it is just a Typescript representation of the object type, it is not an object.
// Its two key value pairs are seperated by ';' not ',' as in object.
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'max',
//     age: 30
// }


//but in practice, it is good to let it inferr as bellow
const person = {
    name: 'max',
    age: 30
}

console.log(person.name);
