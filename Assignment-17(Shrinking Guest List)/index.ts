//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ASSIGNMENT-17<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//14:Shrinking Guests list

//create an array and store list of Guests
let guests: string[] = ["Niklio", "De Marco", "Alex"];

//using arrow function inviting each guest
guests.forEach(guests => {
    console.log(`Dear ${guests}, I would like To Invite You For Dinner At My Home, would you like to come?`);
  
});

//inform guests
console.log("\nGreat!! We found a bigger dinner table.");

//adds more guest at the start of list
guests.unshift(`Arthur`);

//adds more guest at the middle of list
guests.splice(guests.length/2, 0, `Charles Darwin`);

//adds more guest at the end of list
guests.push(`Charlie Henry`);

//finally invite all the guest
guests.forEach(guests => {
    console.log(`Dear ${guests}, I would like To Invite You For Dinner At My Home, would you like to come?`);
  
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>CHANGE-OF-PLAN<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//inform guests again
console.log("\nUnfortunately, i can invite only two people for dinner.");

//create a loop to remove guest untill 2 left
while(guests.length>2){
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner`);
}

//invite the remmaining guests
guests.forEach(guests => {
    console.log(`Dear ${guests}, You're still invited to dinner.`);
  
});

//print the empty guest list
guests.splice(0,guests.length);
console.log(guests);











