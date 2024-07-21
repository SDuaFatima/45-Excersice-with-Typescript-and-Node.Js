import {student} from "./interface";

//student data 

const students: student[] =[
    {id:1,
        firstName: `Alex`,
        lastName: `Volkov`,
        rollNum: 401,
        email: `alexvolkov@gmail.com`,
        isOnsiteAllowed: true,
        entryTest: {isPassed: true,
        obtainedMarks: 85,
        totalMarks: 100}},

    {id:2,
        firstName: `James`,
        lastName: `Oscar`,
        rollNum: 311,
         email: `jamesoscar@gmail.com`,
        isOnsiteAllowed: false,
        entryTest: {isPassed: true,
        obtainedMarks: 86,
         totalMarks: 100}},

         
    {id:3,
            firstName: `Hazel`,
            lastName: `Zain`,
            rollNum: 200,
             email: `hazel2@gmail.com`,
            isOnsiteAllowed: true,
            entryTest: {isPassed: true,
            obtainedMarks: 96,
             totalMarks: 100}},

    {id:4,
        firstName: `Ivy`,
        lastName: `Asher`,
        rollNum: 564,
        email: `ivy345@gmail.com`,
        isOnsiteAllowed: false,
        entryTest: {isPassed: false,
        obtainedMarks: 39,
        totalMarks: 100}},

    {id:5,
        firstName: `Jack`,
        lastName: `James`,
        rollNum: 345,
        email: `jack09@gmail.com`,
        isOnsiteAllowed: true,
        entryTest: {isPassed: true,
        obtainedMarks: 90,
        totalMarks: 100}},

    {id:6,
        firstName: `lara`,
        lastName: `Volkov`,
        rollNum: 409,
        email: `lara87@gmail.com`,
        isOnsiteAllowed: false,
        entryTest: {isPassed: false,
        obtainedMarks: 35,
        totalMarks: 100}},
    
        {id:7,
            firstName: `Elena`,
            lastName: `Kendley`,
            rollNum: 897,
            email: `elenaken@gmail.com`,
            isOnsiteAllowed: true,
            entryTest: {isPassed: true,
            obtainedMarks: 79,
            totalMarks: 100}},

            {id:8,
                firstName: `Elsie`,
                lastName: `jain`,
                rollNum: 207,
                email: `jainelsie@gmail.com`,
                isOnsiteAllowed: true,
                entryTest: {isPassed: false,
                obtainedMarks: 37,
                totalMarks: 100}}       
];

export default students;

