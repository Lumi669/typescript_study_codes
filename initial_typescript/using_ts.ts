var button = document.querySelector("button");
var input1 = document.getElementById("num1")! as HTMLInputElement;
var input2 = document.getElementById("num2")! as HTMLInputElement;
function add(num1: number, num2: number) {   // tell compiler num1 type is number and same to num2 
    return num1 + num2;  //+ convert string to number
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});

// ! tell tsc compiler that there will be an input
// as HTMLInputElement is to let compiler know what element it will be

// summary: typescript can use ! and type cast (here HTMLInputElement)
// as syntax, .ts file will be compiled into .js file, and .js file can be executed by 
//browser, but not .ts file. Therefore, a .ts file must be converted .js file. 
