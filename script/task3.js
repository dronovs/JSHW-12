function sum (a, b) {
    if (b === 0) return a;
    a++;
    b--;
    return sum(a, b);
}

console.log(sum(100, 200));