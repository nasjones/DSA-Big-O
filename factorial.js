function factorial(n) {
    let out = 1
    for (let i = n; i > 0; i--) {
        out *= i
    }
    return out
}

console.log(factorial(5))