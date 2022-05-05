function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: string //use this allow caller of function to define how the result should be returned
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(30, 20, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges + 1);

const combinedNames = combine("rose", "ben", "as-string");
console.log(combinedNames);
