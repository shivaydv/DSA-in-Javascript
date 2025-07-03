// fallthrough condition - when there is no break statement and it falls through to the next case

let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        // no break here, so it will fall through to the next case
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Weekend");
}

// we can also add case condition:
let score = 85;
switch (true) {
    case score >= 90:
        console.log("Grade: A");
        break;
    case score >= 80:
        console.log("Grade: B");
        break;
    default:
        console.log("Grade: C");
}


// use it carefully when comparing floating point numbers
// Floating point precision issue example
let sum = 0.1+ 0.2;
switch (sum) {
    case 0.3:
        console.log("Sum is 0.3");
        break;
    default:
        console.log("Sum is not 0.3, it's actually: " + sum);
}
