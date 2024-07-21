import students from "./data";

//functions

export const getAllStudents = () => {
    return students;
};

export  const getOnsiteStudents = () => {
    const result = students.filter((students) => 
        students.isOnsiteAllowed===true);
    return result
};

export const getStudent =(rollNo: number)=>{
    const foundUser = students.find((Student)=> Student.rollNum=== rollNo);
    return foundUser;
}
