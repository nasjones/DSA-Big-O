function fibonacci(n) {
    let fib = [1, 1]

    if (n === 1)
        return fib[0]
    if (n === 2)
        return fib.join(", ")

    for (let i = 1; i < n - 1; i++) {
        fib.push(fib[i] + fib[i - 1])
    }

    return fib.join(", ")
}

console.log(fibonacci(12))