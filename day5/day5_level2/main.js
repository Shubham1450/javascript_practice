const countries = require('./countries');
const web_techs = require('./web_tech');

console.log("Countries:", countries);
console.log("Web Techs:", web_techs);


const prompt = require('prompt-sync')();
//Q3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
const ele_name = prompt("enter the content: ");
const ele_name1 = prompt("enter the content: ");
if (shoppingCart.includes(ele_name)) {

}
else {
    shoppingCart.unshift(ele_name);
    shoppingCart.unshift(ele_name1);
    console.log(shoppingCart);
}
const honey_allergy = true;
if (honey_allergy) {
    // shoppingCart.remove("Honey");

}
shoppingCart[2] = "Green tea"

//Q4
const countries1 = ['USA', 'Canada', 'Germany', 'Japan', 'Australia'];
if (countries1.includes("Ethiopia")) {
    console.log("ETHIOPIA");
}
else {
    countries1.push("ETHIOPIA");
}

//q5
const Sass = web_techs.includes('Sass');
if (Sass) {
    console.log('Sass is a CSS preprocess.');
} else {
    web_techs.push('Sass');
    console.log('Sass has been added to the array.');
}

console.log(web_techs);

//q6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)


