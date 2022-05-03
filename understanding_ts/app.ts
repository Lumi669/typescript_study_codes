function add(n1: number, n2: number, showResult: boolean, phrase: string){
    const result = n1 + n2;
    if (showResult){

        console.log(phrase + result);
    } else {
        console.log('now return result ... ');
        return result;
    }
}

//Deep understanding of Typescript core strenth - type assignment and type inference
// const number1 = 5;  // not need to use : number
// let number1 = 5;  // not need to use : number, because Typescript has built in type inference
let number1: number  //if not initialize immeaditely(not assign a value), then should use : number
//`let number1: number` is equal to `let number1 = 5`, because Typescript has type inference
// now if write number1 = 'rose', will yell error by red curve line, because line14 it infered that
// number1 is a number, now it is given a string


const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
