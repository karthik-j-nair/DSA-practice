// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].

let image = [[1,1,0],[1,0,1],[0,0,0]];

for(let i =0; i< image.length; i++){
    let arr = image[i];
    let j = 0, k = arr.length - 1;
    while(k>j){
        let temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
        j++, k--;
    }
    for(let h = 0; h < arr.length; h++){
        (arr[h] === 0) ? arr[h] = 1: arr[h] = 0;
    }
}

console.log(image);


