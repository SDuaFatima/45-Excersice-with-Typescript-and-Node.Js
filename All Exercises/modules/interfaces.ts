
//interfaces

export interface EntryTest {
    isPassed: boolean;
    obtainedMarks: number;
    totalMarks: number 
};
 
export interface student {
    id:number;
    firstName: string;
    lastName: string;
    rollNum: number;
    email: string;
    isOnsiteAllowed: boolean;
    entryTest: EntryTest
};