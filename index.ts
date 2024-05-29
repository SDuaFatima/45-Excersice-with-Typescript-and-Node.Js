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
console.log(firstName.toLowerCase() + ` ` + lastName.toLowerCase());

//shows the name in all capital letter
console.log(firstName.toUpperCase() + ` ` + lastName.toUpperCase());

//shows the first letter in capital
console.log(
  firstName.charAt(0).toUpperCase() +
    firstName.slice(1).toLowerCase() +
    ` ` +
    lastName.charAt(0).toUpperCase() +
    lastName.slice(1).toLowerCase()
);

// 3: Famous Quote: Find a quote from a famous person you admire.
//Print the quote and the name of its author. Your output should
//look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log(
  `Albert Einstein once said, “A person who never made a mistake never tried anything new.” `
);

//4: Famous Quote 2: Repeat Exercise 4, but this time store the famous
//person’s name in a variable called famous_person. Then compose your
//message and store it in a new variable called message. Print your message.

let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;
console.log(message);

//5: Stripping Names: Store a person’s name, and include some whitespace
//characters at the beginning and end of the name. Make sure you use each
//character combination, "\t" and "\n", at least once. Print the name once,
//so the whitespace around the name is displayed. Then print the name after striping the white spaces.

//this saves the name whit whitespaces
let name: string ="\t\n  Alex  \t\n"; 

 //print the name with whitespaces
console.log(name);

//print the name without whitspaces
console.log(name.trim()); 


//6: Number Eight: Write addition, subtraction, multiplication, and
//division operations that each result in the number 8. Be sure to
//enclose your operations in print statements to see the results.

console.log(4+4); //Addition
console.log(16-8); //Substraction
console.log(2*4); //Multiplication
console.log(16/2); //Division

//7: You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.


console.log(4+4); 
console.log(7+1); 
console.log(5+3); 
console.log(2+6); 


//8: Favorite Number: Store your favorite number in a variable. Then,
//using that variable, create a message that reveals your favorite number. Print that message.

let favNum: number = 9;
console.log(`My favourite number is ${favNum}.`);

//9: Adding Comments: Choose two of the programs you’ve written, and add
//at least one comment to each. If you don’t have anything specific to write
//because your programs are too simple at this point, just add your name and the
//current date at the top of each program file. Then write one sentence describing what the program does.

//dua fatima, 29-may-2024
//This programs print a famouse quote
console.log(
  `Albert Einstein once said, “A person who never made a mistake never tried anything new.” `
);

//10: Names: Store the names of a few of your friends in a array called names.
//Print each person’s name by accessing each element in the list, one at a time.

let friendsName: string[] = ["Fatima", "Alex", "Zain", "Jannat"];
for(let i = 0; i < friendsName.length; i++){
  console.log(friendsName[i]);
}

//11: Greetings: Start with the array you used in Exercise 11, but instead of just
//printing each person’s name, print a message to them. The text of each message
//should be the same, but each message should be personalized with the person’s name.

let names: string[] = ["Bob", "Ali", "Zubiya", "Junaid"];
for(let i = 0; i < names.length; i++){
  console.log(`Hello! ${names[i]}, You're an amzing human being.`);
}



