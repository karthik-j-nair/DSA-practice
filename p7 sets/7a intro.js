let s = new Set()
s.add(10)
s.add(10)  // duplicate value is not allowed
s.add(20)
s.add(30)
s.add(40)

console.log(s);

s.delete(20); // to delete

console.log(s);

console.log(s.has(100)); // it checks the value, present or not in the set 's'?

console.log(s.size); // gives the size of set



// remove duplicate elements form an array using set
console.log("============================>");

let arr = [1,2,3,3,1,5,7,9,1];
let set = new Set(arr);
console.log(set);



// delete all the even occured number and give the numbers which have odd occurance
console.log("============================>");

let ar = [1,2,3,1,2,3,2,2,6,7,7,7,8,8];

let sett = new Set()
for(let i = 0; i < ar.length; i++){
    if(sett.has(ar[i])) sett.delete(ar[i]);
    else sett.add(ar[i]);
}
console.log(sett);

