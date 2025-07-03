
// with 3rd variable
let a = 10
let b = 20
console.log(a, b)

let c

c = a
a = b
b = c
console.log(a, b)

// without 3rd variable

let x = 10
let y = 20
console.log(x, y)

x = x + y
y = x - y
x = x - y
console.log(x, y)

// using array or - Destructuring assignment

let p = 10;
let q = 20;
console.log(p, q);

[p,q]=[q,p]
console.log(p, q)


