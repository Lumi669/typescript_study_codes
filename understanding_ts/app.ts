//Note: below function, generateError, is both void and never type
// it can not return anything becasue it crashes at throw error, so it belongs to also never type.
//when hover over generateError, it shows void, this is because never is new type,
//and it hasn't been built into the first version of typescript yet.
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);

//function fail inferred as type never by Typescript
const fail = (message: string) => {
  throw new Error(message);
};

//Note: type never can only assigned to a data that can be assigned as never.
// e.g. const grade: never = 123; will show error by Typescript, becaue a number cannot be never type.
//const grade: never = 123;
