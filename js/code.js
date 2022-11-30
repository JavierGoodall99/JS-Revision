// ==========Math Methods==========

// let data = [9, 3, 1, "Peter", 5, 10];
// let size = data.length -1;
// console.log("Array size: ", size);
// console.log("Element ", data[size]);

//display last element 
// console.log("at(): ", data.at(-1));

//display middle number
// let middleIndex = (data.length - 1)/ 2;
// console.log("middleIndex: ", middleIndex);

//display the integer
// let middleIndex = Math.trunc((data.length - 1)/ 2);

//display Peter
// console.log("middle element ", data.slice (middleIndex, middleIndex + 2));

//data - 1 = 4     Make the array even by removing or adding a number          Display the remainder number
// let middleIndex = Math.trunc((data.length - 1) / 2);
// if(data.length % 2 == 0) {
//     console.log(data.slice(middleIndex, middleIndex + 2));
// }else {
//     console.log(data[middleIndex]);
// }

//display highest number      Remove the string from the array by using filter
// let onlyNumbers = data.filter(Number);
// console.log("Max ", Math.max(...onlyNumbers));




// ==========String Methods==========
// let sentence = "I love programming"; 
// console.log(sentence);
// console.log(sentence[0]);                //display the first letter
// console.log(sentence.toLowerCase());     //convert the sentence to lower case
// console.log(sentence.split(''));         //separates the sentence into characters
// console.log(sentence.split(' '));       //separates the words in the sentence 
// console.log(sentence.split('p'));       //removes p from the sentence




// ==========date==========
// let myDate = new Date();                //Display present date
// console.log("My Date: ", myDate);

// let myDate = new Date("2022/11/28");            //Display yesterdays date
// console.log("My Date: ", myDate.toLocaleDateString());




// ==========If statement==========
// let age = 17;
// if(age > 17) {
//     console.log("You are qualified");
// }else {
//     console.log("You are not qualified");
// }




// ==========Nested if statement==========
// let age = 18;
// let salary = 4000;
// if(age > 17) {
//     if(salary >= 5000) {
//         console.log("Well Done");
//     }else {
//         console.log("Present second payslip");
//     }
// }else {
//     console.log("You are not qualified");
// }


//Alternative way to the nested if statement (Don't use the above nested if statement)
// let age = 18;
// let salary = 5000;
// if(age > 17 && salary >= 5000) {
//     console.log("Well Done");
// }else {
//     console.log("Thank You, for coming");
// }



// ==========Switch Statement==========
// let monthInt = 1;
// switch(monthInt) {
//     case 1:
//         console.log("January");
//     break;
//     case 2:
//         console.log("February");
//     break;
// }


// let grade = 99;
// switch(true) {
//     case grade == 100:
//         console.log("You are awesome");
//     break;
//     case (grade >= 90) && (grade <= 99):
//         console.log("Well Done");
//     break;
//     case (grade >= 80) && (grade <= 89):
//         console.log("Distinction");
//     break;
//     case (grade >= 50) && (grade <= 74):
//         console.log("Pass");
//     break;
//     case (grade <=49) & (Math.sign(grade) !=-1 ):
//         console.log("Fail");
//     break;
//     default:
//         console.log("Out of range");
// }




// ==========Loops==========
/*
for in 
for of
for(; ;)
while
do while
*/


//for in    Targets the index 
// let numbers = [8, 9, 3, 12, 34];
// for(let numb in numbers) {
//     console.table(numbers);
// }
// let people = {
//     name: 'Cassidy',
//     surname: 'Lawrence',
//     email: 'cassidy@gmail.com'
// }

// for(let p in people) {
//     console.log(`${p} => ${people[p]}`);
// }


//for of           Displays the value in the array
// for(let numb of numbers) {
//     console.log(numb);
// }

// for(let p of people) {
//     console.log(p);
// }


// for(; ;)                 Infinite Loop
// for(;;) {
//     console.log("Let found out");
// }

// for(let i =0;;) {
//     console.log("Let found out");
// }

// for(let i =0; i< 5; i++)                 //Display Hello world 5 times
// console.log("Hello world");


//while loop 
// let cnt = 0;
// while(cnt < 10) {
//     console.log(`Step: ${cnt}`);
//     cnt++;
// }

// let cnt = 0;
// while(cnt < numbers.length) {
//     console.log(`Step: ${numbers[cnt]}`);
//     cnt++;
// }


//do... while
// do{
//     console.log(`Step: ${numbers[cnt]}`);
//     cnt++;
// }while(cnt < numbers.length);




// ==========Functions==========
// function addition(numb1, numb2) {
//     console.log("Sum is: ", numb1 + numb2);
// }
// addition(4, 5);
// addition(5, 7);
// addition(9, 23);


// addition = (numb1, numb2) => {                 //Adding numbers using arrow function
//     console.log("Sum is: ", numb1 + numb2);
//   }
// addition(2, 5)

// let subtraction = (numb1, numb2) => {                 
//     return numb1 - numb2;
// }
// console.log(`Subtraction is: ${subtraction(12, 9)}`);
// numbers = subtraction(9,2)         //Alternative way to the display the answer on the console log
// console.log(numbers);

// ((numb1, numb2)=>{
//     console.log(numb1 + numb2);
// })(8, 2);




// ==========Ternary Operator==========
// let age = 17; 
// console.log( age >= 17 ? "You are qualified" : "You are not qualified" );



// ==========Rest Operator==========
// function sumOf(...args) {
//     return args.reduce( (a, b) =>{
//         return a + b
//     })
// }
// console.log(sumOf(1, 2, 3, 4, 5));




// ==========Constructor Function==========
// function Person(...details) {
//     this.firstName = details[0];
//     this.lastName = details[1];
//     this.email = details.at(-1);
// }
// let person1 = new Person("Peter", "Hank", "peter@gmail.com");
// console.log(person1);
// console.dir(person1);




/*
Exercise 2

1. Please create a constructor function called PersonDetails that will 
take the following parameters:
firstName, lastName, email
store the values of the arguments to the constructor properties.
2. Create a getter and setter for each properties including a display method that
will display the person details
3. Create an instance called person1 from a constructor function
4. Call a display method (Only)
*/



// Solution
// function PersonDetails(firstName, lastName, 
//     email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;

//     this.getFirstName = ()=> {
//         return this.firstName
//     }
//     this.setFirstName = (value) =>{
//         this.firstName = value;
//     }
//     this.getLastName = ()=> {
//         return this.lastName
//     }
//     this.setLastName = (value) =>{
//         this.lastName = value;
//     }
//     this.getEmail = ()=> {
//         return this.email
//     }
//     this.setEmail = (value) =>{
//         this.email = value;
//     }    
    
//     this.display = ()=> {
//         return `
//         Name: ${this.getFirstName()}
//         Surname: ${this.getLastName()}
//         Email: ${this.getEmail()}`;
//     }
// } 
// let person1 = new PersonDetails("Peter", "Henk",
// "peter@gmail.com");
// console.log(person1.display());
// console.log("=============");
// person1.setFirstName("Sarah");
// person1.setLastName("James");
// person1.setEmail("sarah@gmail.com");
// console.log(person1.display());




// Solution 2 using a class
// class PersonDetails{
//     // Private
//     #firstName;
//     #lastName;
//     #email;
//     constructor(firstName, lastName, email) {
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//         this.#email = email;
//     }
//     // FirstName
//     get firstName() {
//         return this.#firstName;
//     }
//     set firstName(value) {
//         this.#firstName = value;
//     }
//     // LastName
//     get lastName() {
//         return this.#lastName;
//     }
//     set lastName(value) {
//         this.#lastName = value;
//     }
//     // Email
//     get email() {
//         return this.#email;
//     }
//     set email(value) {
//         this.#email = value;
//     }
//     // Display
//     display() {
//         console.log(`
//         Name: ${this.firstName}
//         Surname: ${this.lastName}
//         Email: ${this.email}`);
//     }
// }
// let person1 = new PersonDetails("Joel", "Mukanya", "joel@gmail.com");
// person1.display();
// console.log("===========");
// person1.firstName = "Peter";
// person1.lastName = "Henk";
// person1.email = "peter@gmail.com"
// person1.display();




// ==========Onclick==========

// function addition(e){
//     e.preventDefault();
//     let numb1 = document.querySelector("#numb1").value;
//     let numb2 = document.querySelector("#numb2").value;
//     document.querySelector('#output').innerText = eval(`${numb1} + ${numb2}`);
// }


let btnAddition = document.querySelector('button');
btnAddition.addEventListener('click', (e)=>{
    e.preventDefault();
    let numb1 = document.querySelector("#numb1").value;
    let numb2 = document.querySelector("#numb2").value;
    // document.querySelector('#output').innerText = eval(`${numb1} + ${numb2}`);
    document.querySelector('#output').innerText = 
    parseInt(numb1) + parseInt(numb2);
})
