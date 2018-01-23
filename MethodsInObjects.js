/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {
  name: "Rafael Vasquez",
  friends: 410,
  messages:["Hello, today is monday!","Hello today is tuesday!","Final String!"],
  
 //notice how we arent setting properties here, just making methods, no need to make
 //another object for the methods below
 //you made the mistake of trying to make another property within the object
 
 postMessage(message) {
    facebookProfile.messages.push(message); 
  },
  deleteMessage(index){
      facebookProfile.messages.splice(index,1);
  }
  ,
  addFriend(){
      facebookProfile.friends=facebookProfile.friends+1;
  },
  removeFriend(){
      facebookProfile.friends=facebookProfile.friends-1;
  }
};

facebookProfile.postMessage('bacon');
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(2);
console.log(facebookProfile.messages);
console.log(facebookProfile.friends);
facebookProfile.addFriend();
console.log(facebookProfile.friends);
facebookProfile.removeFriend();
console.log(facebookProfile.friends);
