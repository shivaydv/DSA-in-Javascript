function generatePattern(number) {
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            i == j || i+j==number-1 ? process.stdout.write("* ") : process.stdout.write("  ")
        }
        console.log()
    }
} 

generatePattern(10)

// 1 5
// 2 4
// 3 3
// 4 5
// 5 1