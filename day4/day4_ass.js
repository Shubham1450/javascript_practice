
const prompt = require('prompt-sync')();
// //Q.1

// const age = prompt(`Enter you age`);
// if (age >= 18) {
//     console.log(`You are old enough to drive`);
// }
// else {
//     console.log(`You have to wait for ${18 - age} to turn 18`);
// }

// // Q.2
// const myAge = prompt("Enter your age");
// const yourAge = prompt("Enter your age");

// if (myAge > yourAge) {
//     console.log(`I are ${myAge - yourAge} older than you`);
// }
// else {
//     console.log(`You are ${yourAge - myAge} older than me`);
// }

// //Q.3
// //using if else
// let a = 4;
// let b = 3;
// if (a > b) {
//     console.log(`${a} is greater than ${b}`);
// }
// else if (b > a) {
//     console.log(`${b} is greater than ${a}`);
// }
// //using ternary operator;
// let ans = a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`
// console.log(ans);

// //Q.4
// const num = parseInt(Math.random() * 10);
// const ans1 = num % 2 == 0 ? `${num} is an even number` : `${num} is an odd number`;
// console.log(ans1);


// /////************************/
// //************************* */
// /////********LEVEL 2*****************
// //************************* */


// //Q.1
// const score = prompt("Enter you marks: ");
// // const score = 89;
// if (score >= 80 && score <= 100) {
//     console.log("Your grade is: A");
// }
// else if (score >= 70 && score <= 89) {
//     console.log("Your grade is: B");
// }
// else if (score >= 60 && score <= 69) {
//     console.log("Your grade is: C");
// }
// else if (score >= 50 && score <= 59) {
//     console.log("Your grade is: D");
// }
// else {
//     console.log("Your grade is: F");
// }


// let season = prompt("Enter season: ")
// if (season == "September" || season == "October" || season == "November") {
//     console.log("The season is Autumn");
// }
// if (season == "December" || season == "January" || season == "February") {
//     console.log("The season is Winter");
// }
// if (season == "March" || season == "April" || season == "May") {
//     console.log("The season is Spring");
// }
// if (season == "June" || season == "July" || season == "August") {
//     console.log("The season is Summer");
// }

// let weekend = prompt("Enter day");
// if (weekend == "saturday") {
//     console.log(`${weekend} is a weekend`);
// }
// else {
//     console.log(`${weekend} is a working day`);
// }


/////*************************
//************************* */
/////********LEVEL 3****************
//************************* */
function month(month) {

    const daymts = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month >= 0 && month <= 11) {
        return daymts[month];
    } else {
        return -1;
    }
}

const months = prompt("Enter month: ")

const daymts = month(months);

if (daymts !== -1) {
    console.log(`There are ${daymts} days in ${month}.`);
} else {
    console.log("Enter valid month");
}
