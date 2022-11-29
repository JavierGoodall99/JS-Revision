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


let grade = 99;
switch(true) {
    case grade == 100:
        console.log("You are awesome");
    break;
    case (grade >= 90) && (grade <= 99):
        console.log("Well Done");
    break;
    case (grade >= 80) && (grade <= 89):
        console.log("Distinction");
    break;
    case (grade >= 50) && (grade <= 74):
        console.log("Pass");
    break;
    case (grade <=49) & (Math.sign(grade) !=-1 ):
        console.log("Fail");
    break;
    default:
        console.log("Out of range");
}
