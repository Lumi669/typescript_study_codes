# typescript_study_codes

study following https://bearit.udemy.com/course/understanding-typescript/learn/lecture/16949814#overview

# use typescript

1. install `sudo npm install -g typescript`
2. envoke compiler `tsc`
3. save typescript as a .ts file
4. compile and run a .ts file `tsc fileName.ts`
5. open index.html in a browser and input two numbers
6. click add and check console

Note: change index.html as following:

<!-- <script src="js-only.js" defer></script> -->

    <script src="using_ts.js" defer></script>

# typescript syntax

1. here use ! and type cast
2. add implicit types in file, tell typescript the type of variable e.g number in this case
   function add(num1: number, num2: number) {...}
   now need to convert input1.value and input2.value to number by `+`
