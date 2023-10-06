console.log(" 'There is no exercise better for the heart than reaching down and lifting people up");
console.log("Love is not patronizing and charity isn't about pity, it is about love.Charity and love are the same -- with charity you give love, so don't just givemoney but reach out your hand instead.");


const str_num = '10';
const num = 10;

if (Number((str_num)) == num) {
    console.log("true");
}
else {
    console.log("false",);
}

var parse_float = parseFloat('9.8');

if (parse_float !== 10) {
    parse_float = 10;
    console.log(parse_float);
}
else {
    console.log("Not equal")
}

const jagron_str = "I hope this course is not full of jargon";
if (jagron_str.includes("jargon")) {
    console.log("Jagran is present in the string");
}
else {
    console.log("jagron not present in the string");
}

var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

var min = 50;
var max = 100;

var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

//Q.10
var myString = "JavaScript";

var randomIndex = Math.floor(Math.random() * myString.length);

var randomCharacter = myString.charAt(randomIndex);

console.log("Random character:", randomCharacter);

//Q.12
var sentence = 'You cannot end a sentence with because because because is a conjunction';
var startIndex = sentence.indexOf('because because because');
if (startIndex !== -1) {
    var slicedPhrase = sentence.substr(startIndex, 'because because because'.length);
    console.log(slicedPhrase);
} else {
    console.log("The phrase 'because because because' was not found in the sentence.");
}


// ****************************    Exercises: Level 3    *******************

//Q.1
var sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
var words = sentence.split(' ');
var count = 0;

for (var i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === 'love') {
        count++;
    }
}
console.log("The word 'love' appears " + count + " times");


//Q.2

var sentence = 'You cannot end a sentence with because because because is a conjunction';
var matches = sentence.match(/because/g);
var count = matches ? matches.length : 0;
console.log("The word 'because' appears " + count + " times");

//Q.3
var text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
var numbers = text.match(/\d+/g);
var monthlyIncome = 0;
var annualIncome = 0;

if (numbers) {
    for (var i = 0; i < numbers.length; i++) {
        var num1 = parseInt(numbers[i]);
        if (text.includes('per month')) {
            monthlyIncome += num1;
        } else {
            annualIncome += num1;
        }
    }
}

annualIncome += (monthlyIncome * 12);
console.log("Total Annual Income: " + annualIncome + " euro");
