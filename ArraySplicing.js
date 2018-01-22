/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here

rainbow.splice(2,1); //Left side, details the location of your delete,
//right side how many you want to delete 1= just one (Blackberry) and right 2= (blackbery and blue)
//marked for deletion
rainbow.splice(2,0, "Yellow","Green"); //Adding two elements to the array, not deleting anything [0]
rainbow.splice(6,0, "Purple"); 

console.log(rainbow);
