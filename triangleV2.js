/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.


// test your code by uncommenting the following line
//console.log(buildTriangle(10));

 function buildTriangle(bacon){
    var sonic="";
      for (var b = 1;b<=bacon;b++){
      sonic= sonic + (makeLine(b));
      }
       return sonic;
      
 }
 console.log(buildTriangle(10)); 
 
 
 
//You made a triangle before accidently, but you never figured out how to call the function
//within a function, notice the parameters and how they don't conflict, you needed to open and close a bracket and lable the function
//within the loop/function.
 
 
