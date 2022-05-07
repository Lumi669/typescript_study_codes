function sendAnalytics(data) {
  console.log(data);
}

let aa; // note: a prameter now define type is ok, no error shown, but with parameter not allowed.
sendAnalytics("The data");
aa = 90;

console.log(aa);
