//q1
let random_ids = '';
function random_script(n) {
    let word = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * 10);
        const char_id = word.charAt(randomIndex);
        random_ids += randomIndex + char_id;
    }

}
console.log(random_script(12));

//q3
let r = 0;
let b = 0;
let g = 0;
const rgb = () => {
    r = Math.floor(Math.random() * 1000);
    b = Math.floor(Math.random() * 1000);
    g = Math.floor(Math.random() * 1000);
    return `rgb(${r},${b},${g})`
}

console.log(rgb());


//q4


//q5
const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY",
    "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
const countriesLength = [];
for (let i = 0; i < countries.length; i++) {
    countriesLength.push(countries[i].length)
}
console.log(countriesLength);

//q6
const countries_List = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
const new_list = [];
for (let i = 0; i < countries.length; i++) {
    new_list.push([countries_List[i], (countries_List[i].slice(0, 3)).toLocaleUpperCase(), countries_List[i].length]);
}
console.log(new_list);

//q7
const sliced_list = [];
for (let i = 0; i < countries_List.length; i++) {
    if (countries_List[i].includes("land")) {
        sliced_list.push(countries_List[i]);
    }
}
console.log(sliced_list);

//q8
const sliced_list1 = [];
for (let i = 0; i < countries_List.length; i++) {
    if (countries_List[i].includes("ia")) {
        sliced_list1.push(countries_List[i]);
    }
}
console.log(sliced_list1);

//q9
let temp_len = 0;
for (let i = 0; i < countries_List.length; i++) {
    if (countries_List[temp_len].length < countries_List[i].length) {
        temp_len = i;
    }
}
console.log(countries_List[temp_len]);

//q10
const five_char = []
for (let i = 0; i < countries_List.length; i++) {
    if (countries_List[i].length == 5) {
        five_char.push(countries_List[i])
    }
}
console.log(five_char);

//q14
const app = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (const tech of app) {
    console.log(tech);
}


//q15

const fruits = ['banana', 'orange', 'mango', 'lemon'];
const rev_fruits = []
for (let i = fruits.length - 1; i >= 0; i--) {
    rev_fruits.push(fruits[i])
}
console.log(rev_fruits);

//q16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const new_stack = []
for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
        new_stack.push(fullStack[i][j])
    }
}
for (let nam of new_stack) {
    console.log(nam);
}


