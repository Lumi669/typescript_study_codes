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
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //tuple type
// } = {
//   name: "max",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

//person.role.push("admin"); //ok
//person.role[1] = 10; // error

// person.role = [8, "admin"]; ok
// person.role = []; //error
// person.role = [5, "admin", "user"]; //error

// console.log(person);

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

//enum type
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN, //how to use enum type
};

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

if (person.role === Role.ADMIN) {
  console.log("is admin");
}

/*

enum Role {ADMIN = 5, READ_ONLY, AUTHOR}; then  READ_ONLY=6 and  AUTHOR = 7
Note: can also assign each value with its own specific number:
Note: can also assign each value with its own specific number:
	enum Role {ADMIN = 50, READ_ONLY = 100, AUTHOR == 99}; 
Note: can also assign with string, and mixed typescript
	enum Role {ADMIN = “admin’, READ_ONLY =9, AUTHOR =20}; 

    */
