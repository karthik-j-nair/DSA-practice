
function kthFactor(n, k) {
    // Write your code here
    let small = [], large = [];
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            small.push(i);

            if (i != n / i) {
                large.push(n / i);
            }
        }
    }
    // this question is based on this logic in which you just run the loop still square root and the factors will be like in a way
    /* 
        36---
        1 * 36 = 36
        2 * 18 = 36
        4 * 9 =  "
        6 * 6 =  "
    */
    // so we find the small multiple till squre root and the large multiple (36, 18, 9, 6, excluding 6) from the "n/i" calculation that is "n=i*x" i is smaller nos and x is larger numbers

    large.reverse();

    let factors = small.concat(large);

    if (factors.length < k) return -1;

    return factors[k - 1];
}

console.log(kthFactor(10, 3));

