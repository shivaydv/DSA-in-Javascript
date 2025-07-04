let arr= [64,16,60,40,5]

// min

let min = arr[0]
let max=arr[0]

for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
    if(arr[i]>max){
        max=arr[i]
    }
}

console.log("minimum = "+min)
console.log("maximun = "+max)