let arr = [10,20,30,40]

// with extra space  - space O(n)
let revarr=[]
for(let i = 0;i<arr.length;i++){
    revarr[i] = arr[arr.length-i-1]
}
console.log(revarr)

// without extra space - 2 pointer theory -space O(1)
let i=0 ; 
let j=arr.length-1;
let temp;
while(i<j){ // here we can not use i!=j bcoz it can led to infinite loop in even values
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]= temp;
    i++;
    j--;
}
console.log(arr)

// using inbuilt method 
console.log(arr.reverse())