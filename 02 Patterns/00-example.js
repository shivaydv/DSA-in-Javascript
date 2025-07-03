// example of leetcode pattern style 
function generatePattern(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += "* ";
        }

        result.push(row.trim()); // remove extra space at the end
    }

    return result;
}

// all this is managed in background in leetcode
const pattern = generatePattern(5);

pattern.forEach(row => console.log(row))

