/*
 * Programming Quiz: Quidditch Cup (6-5)
 */
 function hasEnoughPlayers(n){
     if (n.length >= 7){
        n =true;
     }
     else{
        n =false;
     }
     return n;
     
 }

// your code goes here

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));


//I tried to just set true, and false without setting n=true, and not returning n
//i got the output i wanted, but an undefined right below
//lesson learned set your returning value, did a good job debugging here without cheating
//yay!
