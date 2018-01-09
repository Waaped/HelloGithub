/*
 * Programming Quiz: Changing the Loop (4-4)


Today--Tonight we learned for loops are fun to use and easier than while loops and some 
"Short-Cut" Operators that make--


x++ or ++x // same as x = x + 1 --- ++x will display the output, ++x will not show the new value when running in the console.
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x * 2
x /= 5 // same as x = x / 5

*/

 
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}
// rewrite the while loop as a for loop


for(var x=9;x>=1;x-=1){
    console.log('hello '+x);
}
