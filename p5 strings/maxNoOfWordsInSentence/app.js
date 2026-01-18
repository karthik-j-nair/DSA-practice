let sent = ["coding is fun", "practice makes perfect", "consistency is the key to success"];

let arr = new Array(sent.length).fill(0);

for(let i = 0; i < sent.length; i++){
    let temp = sent[i].split(" ");
    let count = temp.length;
    arr[i] = count;
    // console.log(temp);
    
}

console.log(Math.max(...arr));

