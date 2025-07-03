function generatePattern(number) {
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            process.stdout.write("* ")
        }
        console.log()
    }
}

generatePattern(5)