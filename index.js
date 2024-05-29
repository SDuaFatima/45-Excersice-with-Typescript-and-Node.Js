//Personal Message: Store a person’s name in a variable,
//and print a message to that person. Your message should be simple,
//such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Alex";
console.log(`hello ${personName}, would you like to learn some Python today?`);
//2: Name Cases: Store a person’s name in a variable, and then
//print that person’s name in lowercase, uppercase, and titlecase.
//this saves the name
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
// 3: Famous Quote: Find a quote from a famous person you admire.
//Print the quote and the name of its author. Your output should
//look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.” `);
//Famous Quote 2: Repeat Exercise 4, but this time store the famous
//person’s name in a variable called famous_person. Then compose your
//message and store it in a new variable called message. Print your message.
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;
console.log(message);
export {};
