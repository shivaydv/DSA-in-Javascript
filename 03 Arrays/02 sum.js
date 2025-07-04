let arr = [10,20,30,40,50]


// method 1
let sum = 0;
arr.map(num=>sum+=num)
console.log(sum) // 150

// method 2 
let s= 0;
for (let i = 0;i<arr.length;i++){
        s=s+ arr[i];
}
console.log(s)


