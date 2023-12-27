

//Q1
const empty_array = [];

//q2
const numm = [2, 34, 5, 7, 87, 67, 3475];
//Q3
console.log(`The length of array is: ${numm.length}`);

//Q4
console.log(`The first element of an array is ${numm[0]}`);
console.log(`The middle element of an array is ${numm[Math.floor(numm.length / 2)]}`);
console.log(`The last element of an array is ${numm[numm.length - 1]}`);

//Q5
const mixedDataType = [2, "shubham", 2.2, true, { dic: "cse" }, [2, 4, 5]]
console.log(mixedDataType.length);
//Q6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log("names are::", itCompanies);

//Q8
console.log(`Number of companies are: ${itCompanies.length}`);

//Q9
console.log(`The first Company is ${itCompanies[0]}`);
console.log(`The middle company  is ${itCompanies[Math.floor(itCompanies.length / 2)]}`);
console.log(`The last company  is ${itCompanies[itCompanies.length - 1]}`);

//Q11
itCompanies.forEach(element => {
    let c = element.toUpperCase();
    console.log(c);
});

//Q12
let resultString = itCompanies.join(", ");
console.log(`${resultString} are big it companies`);

//Q13
// const checkcompany = prompt("Enter company name: ");
// if (itCompanies.includes(checkcompany)) {
//     console.log(`${checkcompany} exists`);
// }
// else {
//     console.log(`${checkcompany} does not exists`);
// }

//Q14


//q15
itCompanies.sort();

//Q16
itCompanies.reverse();

//q17
const firstthreecompanies = itCompanies.slice(0, 3);


//Q18
const lastthreecompanies = itCompanies.slice(-3);

//Q19
const middle = itCompanies[Math.floor(itCompanies.length / 2)];
const middleslice = itCompanies.slice(middle, middle + 1);

//Q20
itCompanies.pop();
//q21
itCompanies.length = 0;
console.log(itCompanies);