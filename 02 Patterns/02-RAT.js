//  * 
function Pattern(number) {
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("* ")
        }
        console.log()
    }
}

Pattern(5)

// 1234 
function Pattern2(number) {
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(i+" ")
        }
        console.log()
    }
}
Pattern2(5)

// ABCD 
function Pattern3(number) {
    for (let i = 1; i <= number; i++) {
        let ascii = 65
        for (let j = 1; j <= i; j++) {
            process.stdout.write(String.fromCharCode(ascii)+" ")
            ascii++
        }
        console.log()
    }
}
Pattern3(5)