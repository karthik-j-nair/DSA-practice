const solve = (x, n)=>{
    if(n==0) return 1;
    let ans = pow(x, Math.floor(n/2))
    if(n%2 == 0) return ans * ans;
    return ans * ans * x; 
}


function pow(x, n){
    if (n==0) return 1;

    if(n<0){
        n = -n
        return 1/solve(x, n)
    }

    return solve(x, n)
}

console.log(pow(10, -5));