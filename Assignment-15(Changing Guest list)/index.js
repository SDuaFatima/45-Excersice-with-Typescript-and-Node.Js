//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ASSIGNMENT-15<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//14:Guest List 
//create an array and store list of Guests
let guests = ["Niklio", "De Marco", "Alex"];
//using arrow function inviting each guest
guests.forEach(guests => {
    console.log(`Dear ${guests}, I would like To Invite You For Dinner At My Home, would you like to come?`);
});
//print the guest who can't attend
let unableToAttend = "Alex";
console.log(`${unableToAttend} can't make it to dinner.`);
//Replace the guest
let newGuest = "Jack William";
guests.forEach(guests => {
    console.log(`Dear ${guests}, I would like To Invite You For Dinner At My Home, would you like to come?`);
});
export {};
