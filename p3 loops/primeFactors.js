
// Write your code here

let nStr = 70;
if (nStr <= 1) {
    console.log("No prime factor");

} else {

    for (let i = 2; i * i <= nStr; i++) {
        if (nStr % i === 0) {
            while (nStr % i == 0) {
                console.log(i);
                nStr = nStr / i;
            }
        }
    }
    if (nStr != 1) console.log(nStr)
}

