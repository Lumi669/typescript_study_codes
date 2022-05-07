"use strict";
//must use ! at the end of the code here to tell typescript there is such element, otherwise show error
const button = document.querySelector("button");
function clickHandler(message) {
    console.log("Clicked " + message);
}
//here there is not this keyword, so use null instead of this.
button.addEventListener("click", clickHandler.bind(null, "hello"));
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
//# sourceMappingURL=app.js.map