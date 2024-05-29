//Personal Message: Store a person’s name in a variable,
//and print a message to that person. Your message should be simple,
//such as, “Hello Eric, would you like to learn some Python today?”

let personName: string = "Alex";
console.log(`hello ${personName}, would you like to learn some Python today?`);

//2: Name Cases: Store a person’s name in a variable, and then
//print that person’s name in lowercase, uppercase, and titlecase.

//this saves the name
let firstName: string = "usman";
let lastName: string = "ali";

//shows the name in all small letters
console.log(firstName.toLowerCase() + " " + lastName.toLowerCase());

//shows the name in all capital letter
console.log(firstName.toUpperCase() + " " + lastName.toUpperCase());

//shows the first letter in capital
console.log(
  firstName.charAt(0).toUpperCase() +
    firstName.slice(1).toLowerCase() +
    " " +
    lastName.charAt(0).toUpperCase() +
    lastName.slice(1).toLowerCase()
);
