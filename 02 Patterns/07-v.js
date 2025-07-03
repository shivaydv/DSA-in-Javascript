function generatePattern(number) {
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= (2*number-1); j++) {
            i == j || i+j == 2*number ? process.stdout.write("* ") : process.stdout.write("  ")
        }
        console.log("")
    }
} 

generatePattern(10)

