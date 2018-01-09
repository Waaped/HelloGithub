/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while ( num>=1/* your stop condition goes here */) {
    if(num===2){
     console.log(num+' bottles of juice on the wall! '+num+' bottles of juice!'+' Take one down, pass it around... '+(num-1)+' bottle of juice on the wall!');
    }
    else if(num===1){
        console.log(num+' bottle of juice on the wall! '+num+' bottle of juice! Take one down, pass it around... '+(num-1)+' bottles of juice on the wall!');
    }
    else{
    console.log(num+' bottles of juice on the wall! '+num+' bottles of juice! Take one down, pass it around... '+(num-1)+' bottles of juice on the wall!');// check value of num
    // print lyrics using num
   // don't forget to check pluralization on the last line!
    }
       num=num-1;                  // decrement num
}

//Janruary 7, 2018. Needs a nested else if within while, to get the right output, go for the different looks, maybe a terranary operator
//Terranary operators or cases may make this line of code more managable, or using case statements in my next try
//Cases would have made this cleaner instead of tangoing with if else syntax
//Ended up making an infinite loop when i first implemented "else if" after realizing i needed to add another condition
//By leaving the decrement of num within the first else  statement, it executed and crashed the compiler udemy--sort of
//A friend crashed a server accidently using the infinite loop, be carefull with the braket!
