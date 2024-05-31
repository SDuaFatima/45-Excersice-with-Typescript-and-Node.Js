//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ASSIGNMENT-16<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//14: More Guests
//create an array and store list of Guests
let guests = ["Niklio", "De Marco", "Alex"];
//using arrow function inviting each guest
guests.forEach(guests => {
    console.log(`Dear ${guests}, I would like To Invite You For Dinner At My Home, would you like to come?`);
});
//inform guests
console.log("\nGreat!! We found a bigger dinner table.");
//adds more guest at the start of list
guests.unshift(`Arthur`);
//adds more guest at the middle of list
guests.splice(guests.length / 2, 0, `Charles Darwin`);
//adds more guest at the end of list
guests.push(`Charlie Henry`);
//finally invite all the guest
guests.forEach(guests => {
    console.log(`Dear ${guests}, I would like To Invite You For Dinner At My Home, would you like to come?`);
});
export {};
