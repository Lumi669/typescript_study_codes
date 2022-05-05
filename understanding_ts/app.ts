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
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple type
} = {
  name: "max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

//person.role.push("admin"); //ok
//person.role[1] = 10; // error

// person.role = [8, "admin"]; ok
// person.role = []; //error
person.role = [5, "admin", "user"]; //error

console.log(person);

// use ': string[]' to define type for array with string elements.
let favoriteActivities: string[];
favoriteActivities = ["Sports", "Singing"];

// if array element types are not the same, use ': any[]' to define its type, but lost the typescript checking error power with any
// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 1];

console.log(person.name);

//loop an array
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); //Typescript inferr that hobby is a string, so hobby. can show list of methods suitable for string

  //console.log(hobby.map()); // shows error!!!
}
