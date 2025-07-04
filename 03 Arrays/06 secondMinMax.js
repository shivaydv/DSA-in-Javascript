let arr = [64, 16, 60, 40, 5, 3, 4, 40, 60]

let min = Math.min(arr[0], arr[1])
let SMin = Math.max(arr[0], arr[1])

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        SMin = min;
        min = arr[i]
    }
    else if (arr[i] < SMin && arr[i] != min) {
        SMin = arr[i]
    }
}

console.log(SMin)


let max = Math.max(arr[0], arr[1])
let SMax = Math.min(arr[0], arr[1])

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        SMax = max;
        max = arr[i]
    }
    else if (arr[i] > SMax && arr[i] != max) {
        SMax = arr[i]
    }
}

console.log(SMax)