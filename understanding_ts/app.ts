function combine(
  input1: number | string,
  input2: number | string,
  //use this allow caller of function to define how the result should be returned
  //now literal combine with union type, only one of the two strings are allowed for 3rd param
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2; //now with 3rd param checked, mutst use + to convert input1 and input2 as number
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;

  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 20, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges + 1);

const combinedNames = combine("rose", "ben", "as-string");
console.log(combinedNames);
