//Rotate a square multidimensional array counter-clockwise by 90 degrees 

// Input:
//  1  2  3
//  4  5  6
//  7  8  9

// Output:
//  3  6  9 
//  2  5  8 
//  1  4  7 


const rotate = (arr) => {
    let [idx0, idx1] = [arr.length-1, 0]
    let copy = []
    let dimension = arr.length

    while(dimension > 0){
        copy.push([])
        dimension--
    }

    for(let i=0; i < arr.length; i++){
        for(let j=0; j < arr.length; j++){
            copy[idx0][idx1] = arr[i][j];
            if(idx0 === 0){
                idx1++;
                idx0 = arr.length-1;
            } else idx0--;
        }
    }
    return copy
}


const arr = [[1,  2,  3],
            [4,  5,  6],
            [7,  8,  9]]

const arr2 = [[1,  2,  3, 4],
            [5,  6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]]            

console.log(rotate(arr))
console.log(rotate(arr2))