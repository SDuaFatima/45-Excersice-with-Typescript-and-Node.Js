//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ASSIGNMENT-18<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//18: Seeing the World
//create and array ans store places name
let places = ['South korea', 'Italy', 'Iceland', 'San Fransico'];
//print the original list
console.log(`Original Order: ${places}`);
//print in alphabatic order
console.log(`Alphabetical order:`, [...places].sort());
//Again print the original list
console.log(`Original Order: ${places}`);
//print in Reverse alphabetical order
console.log(`Rerverse Alphabatical order:`, [...places].sort().reverse());
//Again print the original list
console.log(`Original Order: ${places}`);
//print in Reverse order
places.reverse();
console.log(`Reverse Order: ${places}`);
//Again print the original list
places.reverse();
console.log(`Original Order: ${places}`);
//sort the list
places.sort();
console.log(`Alphabetical Order: ${places}`);
//reverse alphabetical order
places.reverse();
console.log(`Reverse Alphabetical Order: ${places}`);
export {};
