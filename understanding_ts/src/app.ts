const userName = "ros";

console.log(userName);
// long notes about compilation see typescript_info.odt on google drive.

//must use ! at the end of the code here to tell typescript there is such element, otherwise show error
const button = document.querySelector("button")!;

button.addEventListener("click", () => {
  console.log("apple are comming ...");
});
