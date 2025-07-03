let a = 123
let sum=0;
while(a!=0){
    let lastDigit = a%10
    // console.log(lastDigit)
    sum+=lastDigit
    // console.log(sum)
    a= Math.floor(a/10)
}
console.log(sum)