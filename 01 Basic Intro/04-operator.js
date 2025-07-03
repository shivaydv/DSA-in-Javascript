// - Arthematic operators  + - * / %
// - Relational operators  > < >= <=
// - Unary operators  ++ --
// - Logical operators  && ||


// Q-1
let i = 11
i= i++ + ++i
console.log(i) // 24

// Q-2
let a= 11,b=22
let c = a+b+a++ + b++ + ++a + ++b

console.log(a) // 13
console.log(b) // 24
console.log(c) // 103

// Q-3
let B = true
B++;
console.log(B) // 2


// Q-4

// This line will throw an error because you cannot increment a literal value like 10.
let x = 10++ 


// Q-5
let y = 10;
// This line will also throw an error bcoz => it will convert into = > z= --(10) which is wrong as explained in Q-4
let z = --(y++); 
console.log(z); 
