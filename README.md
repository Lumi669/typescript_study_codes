# typescript_study_codes

study following https://bearit.udemy.com/course/understanding-typescript/learn/lecture/16949814#overview

# use typescript

0. install node.js (used for install dev tools, 3rd party libararies)
1. install `sudo npm install -g typescript`
2. envoke compiler in terminal by cmd: `tsc`
3. save typescript as a .ts file
4. compile and run a .ts file with cmd: `tsc fileName.ts`
5. open index.html in a browser and input two numbers
6. click add and check console
7. install develop only dependency tool named lite-server `npm install --save-dev lite-server`
8. add `"start":"lite-server"` in package.json script part, now can start lite-server by `npm start`, NOTE: it automatically update browser when html, css or ts codes changes. To make it happend do two things:
   - in one terminal `npm start` the lite-server
   - in 2nd terminal `tsc app.ts` after saving the updated app.ts file for example
   - then the browser will refresh!

# light server is a simple development only node server which always serves the index.html file next to the packaged adjacent file. It run at port 3000 locally by default.

# Note: change index.html as following:

<!-- <script src="js-only.js" defer></script> -->

    <script src="using_ts.js" defer></script>

# typescript syntax

1. here use ! and type cast
2. add implicit types in file, tell typescript the type of variable e.g number in this case
   function add(num1: number, num2: number) {...}
   now need to convert input1.value and input2.value to number by `+`
