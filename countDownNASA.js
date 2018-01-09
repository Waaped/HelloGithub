/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var count =60;

while (count>=0){
    switch (count) { 
    case 50:
        console.log('Orbiter transfers from ground to internal power');
        break;
    case 31:
        console.log('Ground launch sequencer is go for auto sequence start');
        break;
    case 16:
        console.log('Activate launch pad sound suppression system');
        break;
    case 10:
        console.log('Activate main engine hydrogen burnoff system');
        break;
    case 6:
        console.log('Main engine start');
        break;
    case 0:
        console.log('Solid rocket booster ignition and liftoff!');
        break;
    default:
    console.log('T-'+count+' seconds');
    break;

}
  count=count-1;
   
}









/*

--You can ignore this line of code

-- Decided half way through to practice my cases, as'if else' has gotten stale and practiced well
enough in the previous cases, I will return to do advanced terenary operators as cases are similar to if conditionals

while (count>=0){
    
    if (count===0) {
        console.log('Solid rocket booster ignition and liftoff!');
    }
    else if (count===50){
        console.log('Orbiter transfers from ground to internal power ');
    }
    else if (count==50){
    else{
    console.log('T-Minus '+count+' Seconds');
    }
    count=count-1;
}



*/
