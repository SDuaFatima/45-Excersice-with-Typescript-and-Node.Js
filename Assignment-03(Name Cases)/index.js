//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ASSIGNMENT-N0-02<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//create a variable to store first and last name
let firstName = "usman";
let lastName = "ali";
//shows the name in all small letters
console.log(firstName.toLowerCase() + ` ` + lastName.toLowerCase());
//shows the name in all capital letter
console.log(firstName.toUpperCase() + ` ` + lastName.toUpperCase());
//shows the first letter in capital
console.log(firstName.charAt(0).toUpperCase() +
    firstName.slice(1).toLowerCase() +
    ` ` +
    lastName.charAt(0).toUpperCase() +
    lastName.slice(1).toLowerCase());
export {};
