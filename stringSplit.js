function stringSplit(string) {
    let out = []
    let word = ""
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === "/") {
            out.push(word)
            word = ""
        }
        else if (i === (string.length - 1)) {
            word += string.charAt(i)
            out.push(word)
        }
        else
            word += string.charAt(i)
    }
    return out
}

console.log(stringSplit('02/20/2020'))