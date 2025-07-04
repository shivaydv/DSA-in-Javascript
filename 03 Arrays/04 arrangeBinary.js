// align all 0s in left and 1 in right

let arr = [0,0,0,1,1,0,0,1,1,1,0,1,0,1]


/* solution explanation
take 2 pointer i and j
- i will ittrate to each elemnt in the array
- j will be used to swap the values
- when ever arr[i] has a value 0 swap it with j 
- only incremnt the value of j after swapping other wise not increment
- ends the ittration if i reaches to the end

edge cases
- if arr[i] = 0 we will swap but if arr[j] is also 0 we dont need to swap
*/

let j =0 

for (let i =0;i<arr.length;i++){
    if(arr[i]==0 ){
        if(arr[j]!=0){ //edge case
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            console.log("swap at index"+i+j)
        }
        j++;
    }
}

console.log(arr)