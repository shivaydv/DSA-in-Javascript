function Pattern(num) {
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num - i + 1; j++) {
            process.stdout.write("* ")
        }
        // for (let j = num; j >= i; j--) {
        //     process.stdout.write("* ")
        // }
        console.log()
    }
}
Pattern(5)