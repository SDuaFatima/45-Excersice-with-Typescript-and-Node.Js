

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ASSIGNMENT-N0-02<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

 
//create a variable to store first and last name
let firstName: string = "usman";
let lastName: string = "ali";

//shows the name in all small letters (LowerCase)
console.log(firstName.toLowerCase() + ` ` + lastName.toLowerCase());

//shows the name in all capital letter (UpperCase)
console.log(firstName.toUpperCase() + ` ` + lastName.toUpperCase());

//shows the name in titlecase.
console.log(
  firstName.charAt(0).toUpperCase() +
    firstName.slice(1).toLowerCase() +
    ` ` +
    lastName.charAt(0).toUpperCase() +
    lastName.slice(1).toLowerCase()
);