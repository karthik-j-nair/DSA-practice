let map = new Map();
map.set("ram", 8);
map.set("ram", 8); // nothing will happen because map have unique key, so can't store duplicate key but can store duplicate value
map.set("rakesh", 9)
map.set("raj", 8)
map.set("ram", 5) // override 
console.log(map);

// map.delete("raj")
console.log(map.get("raj"));
console.log(map.size);
console.log(map.has("Raj"));  // false -> case sensitive


// ===============> for keys and values
for(let [key, value] of map){
    console.log(key, value);
}
    
// ===============> for keys
for(let key of map.keys()){
    console.log(key);
}
    
// ===============> for keys
for(let value of map.values()){
    console.log(value);
}

