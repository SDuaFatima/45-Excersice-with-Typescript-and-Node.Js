//classes
class Person {
     firstName;
     lastName;
     id;
     constructor(firstName: string, lastName: string, id: number){
        this.firstName= firstName;
        this.lastName= lastName;
        this.id= id;
     }

     getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
  }
        
  const person = new Person('Jane','volkov', 25);
  console.log(person.getFullName());

// //Acesses modifers:
// //Private modifers: only allows access to the class member from within the class.

class Person1 {
    private ssn: string;
    private firstName: string;
    private lastName: string;
  
    constructor(ssn: string, firstName: string, lastName: string) {
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
    }

    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  };

let person1 = new Person1( '153-07-3130' , 'John', 'Doe');
console.log(person1.ssn); // compile error

// //public modifers: (default) allows access to the class member from anywhere.
// //by default TS will give public type to the class members

class Person2 {
    private rollNum: number;
    private firstName: string;
    private lastName: string;
  
    constructor(rollNum : number, firstName: string, lastName: string) {
      this.rollNum = rollNum;
      this.firstName = firstName;
      this.lastName = lastName;
    }

    public getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  };

let person2 = new Person2(2576 , 'Alex', 'kane');
console.log(person2.getFullName()); // accessable because its public

// //protected modifers: allows access to the class member from itself and any classes that inherit it.

//readonly modifers:this allows you to mark the properties of a class immutable.

class Person3 {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
};

let person3 = new Person3(new Date(1990, 12, 25));
person.birthDate = new Date(1991, 12, 25); // Compile error : Cannot assign to 'birthDate' because it is a read-only property.

// //first lets intoduce you to typescript inheritance.
// //A class can reuse the properties and methods of another class.
// //This is called inheritance in TypeScript.

// //parent class
class Person4{
    constructor(private firstName: string, protected lastName: string) {} //lastname is protected still we can use it in child class
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
      return `This is ${this.firstName} ${this.lastName}.`;
    }
  };

//child class
class Employee extends Person4 {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {
        
        // call the constructor of the Person class:
        super(firstName, lastName);
    }
}

let employee = new Employee('John', 'Doe', 'Web Developer');

console.log(employee.getFullName());
console.log(employee.describe());