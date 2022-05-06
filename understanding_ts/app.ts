/*
unkown type is strictive than any type. If not know which data type it is, then 
use unkown, it can still add type check over any, see below codes in image, userName is string, userInput is unkown, even userInput is initialized as a string, still show error in line 19. However, can use if/else (line 21) to check. any data type is removing any type check, if change unkown to any in below codes, error disapper, should avoid using it. 
unkown type need further check with if/else. see bellow unkown type example (comment out line 14 first): 
*/

let userInput: unknown;
let userName: string;

//userInput = 5;
userInput = "max";
//userInput = 9;

userName = userInput;

if (typeof userInput === "string") {
  userName = userInput;
  console.log("yes");
} else {
  console.log("no");
}
