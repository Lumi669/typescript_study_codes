//set type of return value
// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }

//if there is no special reason, let Typescript infer return value type
function add(n1: number, n2: number) {
  return n1 + n2;
}

// void type, means that a function doesn't return anything
//not necessary to write it down like
// function printResult(num: number): void {
//   console.log("Result " + num);
// }

function printResult(num: number): void {
  console.log("Result " + num);
}

// the callback type is: (num: number) => void
//NOTE: by saying the function type of callback is void, means we will ignore any result it might return //here. So, if the callback indeed return sth. Typescript will not show error .
// therefor, line 42 return a value, but no error.
//It only means that addAndHandle function will not do anything with the return value from the callback //function, so does not care the return type.
function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

printResult(add(5, 12));

//how to write function type
// a function name is combineValue, it has two parameters, both are number type and it return number.
let combineValues: (a: number, b: number) => number;

combineValues = add; // ok
//combineValues = printResult; //error!!!

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});
