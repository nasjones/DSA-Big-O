function triNum(n) {
    let out = 0
    for (let i = 1; i <= n; i++) {
        out += i
    }
    return out
}

console.log(triNum(4))