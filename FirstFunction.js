 
 //*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */
 
 //Notice how it prints 3 (ha)s, but has a conditional that termentates at <3 and not <=3;
 //This is because we start at 0(i=0), it will increment 0(Ha)+1(Ha)+2(Ha!)<3, this one caugt me a little off
 //gaurd, but this is definatley something i will redo.
 
function laugh(num){
    var ha="";
    for (var i = 0;i<num; i++){ //the real magic happens here, so long as this is true, this will continue to execute below
    ha = ha + "ha";  //This pretty much a console.log executing and following directions not, having any effect on input or the loop
 }
    return ha+"!"; //this adds the exclamation point, and processes the fina ha,
 }
 
console.log(laugh(3)); 

//THE FOR LOOP BELOW HAS the same output, however the power of the function comes where you only have to change the input
// i would imagine as a codebase gets larger and longer 
//im not sure if there is any way to manipulate the condition of a for loop on the user end, and can see the implementation aspects
// in HTML

var ha="";
for (var i = 0;i<=25; i++)
{ //the real magic happens here, so long as this is true, this will continue to execute below
  ha = ha + "ha!";
}
console.log(ha);

//I can now imagine, how you can manipulate this even further, even getting a count on user input(.onclick), submiting the click count
// into the parameter as it's arguement, so functions stacked on functions? i guess we'll find out later :)!

//This is another manipulation, i added another parameter, just to see how it acts

 function laugh(num,bacon){
    var ha="";
    for (var i = 0;i<=num; i++){
    ha = ha + "ha!";
 }
    var sonic="";
    for (var b = 0;b<=bacon;b++){
    sonic= sonic +" boom";
    }
     return ha+sonic;
 }
 
console.log(laugh(5,5)); 

//forgot to nest the loop to get it within the lauging statemen
//THis took me into an adventure of deleting and inserting, i somehow created this cool half pyramid thing lol

 function laugh(num,bacon){
    var ha="";
    var sonic="";
    for (var i = 0;i<=num; i++){
      for (var b = 0;b<=bacon;b++){
      sonic= sonic +" boom";
      console.log(sonic);
      }
       ha = ha + "ha!";
       return ha;
 }
      
 }
 console.log(laugh(1,7)); 

//Now to get serious realized i didnt have to increment so many times haha, i keep forgetting that the incrementaiton will happen anyway
//there was no need for me to double it on each incrementation, hence the half pyramid
//thanks to my old github for loop notes (Finding my Seat Quiz) i was able to trouble shoot to get the output i wanted

 function laugh(num,bacon){
    var ha="";
    var sonic="";
    for (var i = 0;i<=num; i++){
       ha = "ha!";
      for (var b = 0;b<=bacon;b++){
      sonic= " boom";
      console.log(sonic+" "+ha);
      }
                                }
      
      }
 console.log(laugh(1,7)); 


//I was humbled here, need to read my old notes and github posts. spent a good portion of time expermentating, so i take it as a win!

