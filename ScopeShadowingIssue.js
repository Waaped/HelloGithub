//This shows scope shadowing/overriding issue



var x = 1;

function addTwo() {
  x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);

///////////////This prints 4, all values get passed along, although the intention seems to be to maintatin the incrementation only within
//function

var x = 1;

function addTwo() {
  var x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);

//This prints 2, by simply declaring the variable inside of the function, you can make the variable independant of the
//the global variable!
