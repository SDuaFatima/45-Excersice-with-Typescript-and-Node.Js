import { getAllStudents,getOnsiteStudents, getStudent } from "./functions";

const allStudents = getAllStudents();
console.log(`All Students: ` ,allStudents)

const onsiteStudents = getOnsiteStudents();
console.log(`onsite Students: `,onsiteStudents) 

const result = getStudent(200);
console.log(result);