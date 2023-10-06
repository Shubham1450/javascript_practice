const challenge = "30 Days of JavaScript";
console.log(challenge);
console.log(challenge.length)

const tolower = challenge.toLocaleLowerCase();
const toUpper = challenge.toLocaleUpperCase();
console.log(toUpper)
console.log(tolower)


var originalString = "This is a sample sentence.";
var firstWord = originalString.substring(4, originalString.length - 1);
console.log(firstWord);

const daysstr = challenge.substring(3, 21)
console.log(daysstr)

if (challenge.includes("Script")) {
    console.log("Yes present");
}

const split_str = challenge.split(" ");
console.log(split_str)

const faang = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(faang.split(","));

const text = "30 Days of JavaScript";
const result = text.replace("JavaScript", "Python");
console.log(result);


// indexOf

console.log(text.indexOf("a"));
console.log(text.lastIndexOf("a"));

const sen = "You cannot end a sentence with because because because is a conjunction";
console.log(sen.indexOf("because"));
console.log(sen.lastIndexOf("because"));

sen.trim();

const str = "30 Days Of JavaScript";
const startsWithResult = str.startsWith("30 Days");
const endsWithResult = str.endsWith("30 Days");
console.log(startsWithResult);
console.log(endsWithResult);
console.log(str.match("a"));


const str1 = "30 Days of ";
const str2 = "JavaScript";
const merg = str1.concat(str2);
console.log(merg);

const repeatedString = merg.repeat(2);

console.log(repeatedString);


