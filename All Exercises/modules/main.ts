import { getAllStudents, getOnsiteStudents, getStudent } from "./functions";

const allStudents = getAllStudents();
console.log(`ALL STUDENTS: `,allStudents );

const onsiteStudents= getOnsiteStudents();
console.log(onsiteStudents);

const result= getStudent(401);
console.log(result);