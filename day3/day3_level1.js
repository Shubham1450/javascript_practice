// Q.1
const firstName = "Shubham";
const lastName = "Kumar";
const country = "India";
const age = 20;
const isMarried = false;
console.log(`Typeof firstName is : ${typeof (firstName)}`);
console.log(`Typeof lastName is : ${typeof (lastName)}`);
console.log(`Typeof country is : ${typeof (age)}`);
console.log(`Typeof isMarried is : ${typeof (isMarried)}`);

//Q. 2
if (typeof ('10') === typeof (10)) {
    console.log(" Yes");
}
else {
    console.log("No");
}

//Q. 3

if (parseInt('10') === (10)) {
    console.log("Yes");
}
else {
    console.log("No");
}

//Q. 4

const truthy1 = 4235;
const truthy2 = "Hello";
const truthy3 = true;

const falsy1 = 0;
const falsy2 = "";
const falsy3 = false;

// Q. 5

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

//Q 5-12
const py = "python".length;
const jar = "jargon".length;
const falsycomp = py !== jar;
console.log(falsycomp);

// Q. 6
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

// Q.7
//1
const date1 = new Date()
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getDate());
console.log(date1.getDay());
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getTime() / 1000);


//*******LEVEL 2***************** */
//Q.1
// const base = prompt("Enter base");
// const height = prompt("Enter height");
// console.log(`The Area of triangle is ${0.5 * base * height}`);

//Q.2
// const a = prompt("Enter a");
// const b = prompt("Enter b");
// const c = prompt("Enter c");
// console.log(`The Perimeter of triangle is ${a+b+c}`);

//Q.3
// const length = prompt("Enter length");
// const width = prompt("Enter width");
// console.log(`The Area of triangle is ${length*width} and the perimeter of rectangle is ${2*(length*width)}`);

//Q.4
// const radius = prompt("Enter radius");
// console.log(`the are of circle is ${3.14*r*r});

//Q.5

const slope = 2;
const yit = -2;

const xit = -yit / slope;

console.log("Slope: " + slope);
console.log("X-Intercept: " + xit);
console.log("Y-Intercept: " + yit);


//Q.6
const y1 = 10;
const y2 = 2;
const x1 = 2;
const x2 = 6;
const slope2 = (y2 - y1) / (x2 - x1);
console.log(slope2);


if (slope === slope2) {
    console.log("Same");
}
else {
    console.log("Not same");
}

//Q .8
const a = 1;
const b = 6;
const c = 9;
const d = Math.sqrt(b * b - (4 * a * c));
console.log(d);
const x = (-b + d) / 2 * a;
console.log(`The value of x at which y=0 is: ${x}`);

//Q.9

const hours = 40;
const per_hour = 28;
console.log(`yeakly earnig is: ${hours * per_hour}`);

//Q.10
// const myNameLen = promt(`Enter your Name`).length;
// if (myNameLen > 7) {
//     console.log(`name is long else say
//     your name is short`);
// }

//Q.11
const firstName1 = "shubham"
const lastName1 = "kumar"

if (firstName1 > lastName1) {
    console.log(`Your first name, ${firstName1} is longer than your family name, ${lastName1}`);
}

//Q.12
const myAge = 20;
const youAge = 17;
console.log(`I am ${myAge - youAge} older than you`);

//Q.13

// const mydob = prompt("Enter you DOB year");
// if (mydob - getFullYear() >= 18) {
//     console.log(`you are ${mydob} . You are old enough to drive`);
// }
// else {
//     console.log(`you are ${mydob} . You allowed to drive after ${(getFullYear()-mydob)-18} year`);
// }

//Q.14
const year12 = 100;
console.log(`${year12 * 365 * 24 * 60 * 60}`);

//Q.15
//1
const date123 = new Date(2023, 10, 28, 5, 4);
console.log(date123.toLocaleString());

const date1234 = new Date("10-10-2023")
console.log(date1234.toLocaleString());

// Execise :LEVEL 3

// const date12 = new Date();
// console.log(date12.toLocaleString());

function ymd(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    return formattedDate;
}

const currentDate = new Date();
const formattedDate = ymd(currentDate);

console.log('YYY-MM-DD HH:mm:', formattedDate);
