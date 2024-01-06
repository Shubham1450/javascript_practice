const countries_List = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
const sortedCountries = [...countries_List].sort();
console.log(sortedCountries);

const countries = require('./countries');

//q4
const countries_List2 = [];
for (let i = 0; i < countries_List.length; i++) {
    if (countries_List[i].includes("land")) {
        countries_List2.push(countries[i]);
    }
}
console.log(countries_List2);

//q5
let temp_len = 0;
for (let i = 0; i < countries.length; i++) {
    if (countries[temp_len].length < countries[i].length) {
        temp_len = i;
    }
}
console.log(countries[temp_len]);

//q7
let four = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length == 4) {
        four.push(countries[i])
    }
}
console.log("Countries with 4 ch: " + four);

//q8
let two = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length >= 2) {
        two.push(countries[i])
    }
}
console.log("Countries with 2 or more ch: " + two);

//q9
const rev_new_list = [];
for (let i = countries.length - 1; i >= 0; i--) {
    let a = countries[i].toUpperCase();
    rev_new_list.push(a)
}
console.log(rev_new_list);