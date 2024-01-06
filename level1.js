//q1

for (let i = 0; i < 10; i++) {
    console.log(i);
}
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

let k = 0;
do {
    console.log(k);
    k++;
} while (k < 10)

//q2

for (let i = 10; i > 0; i--) {
    console.log(i);
}
let l = 10;
while (l > 0) {
    console.log(l);
    l--;
}

let m = 0;
do {
    console.log(m);
    m--;
} while (m > 0)

//q3

let n = 5;
for (let i = 0; i <= n; i++) {
    console.log(i);
}

//q4
for (let i = 1; i <= 6; i++) {
    let q = '';

    for (let j = 1; j <= i; j++) {
        q += '#';
    }

    console.log(q);
}

//q5

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);

}

//q6
for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i * i} ${i * i * i}`);

}

//q7
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }

}

//q8
for (let i = 0; i < 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }

}

//q9
console.log("prime");
let flag = true;
for (let i = 1; i < 100; i++) {
    for (let j = 1; j < i; j++) {
        if (j != i && j != 1) {
            if (i % j == 0) {
                flag = false;
                break;
            }
        }
    }
    if (flag) {
        console.log(i);
    }
    else {
        flag = true;
    }

}


//q10
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//q11
let sumOfOds = 0;
let sumOfEven = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumOfEven += i;
    }
    else {
        sumOfOds += i;
    }

}
console.log(`Sum of even: ${sumOfEven} and sum of odds: ${sumOfOds}`);

// q12
let sumofEvenOdds = [];
sumofEvenOdds.push(sumOfEven, sumOfOds);
console.log(sumofEvenOdds);

//q13
const ans = [];
for (let i = 0; i < 5; i++) {
    let num = Number(Math.trunc(Math.random() * 10));
    ans.push(num);
}
console.log(ans);

//q15
// let random_value = "";
// for (let i = 0; i < 6; i++) {

// }

let random_ids = '';
let word = 'abcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * 10);
    const char_id = word.charAt(randomIndex);
    random_ids += randomIndex + char_id;
}

console.log(random_ids);

