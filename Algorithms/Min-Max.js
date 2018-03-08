/*
Given five positive integers, find the minimum and maximum values that can be calculated by 
summing exactly four of the five integers. Then print the respective minimum and maximum values 
on one line, singly-spaced.

Example Input: 
1 2 3 4 5

Example Output: 
10 14
*/

function miniMaxSum(arr) {
    let totalSum = arr.reduce((a,b) => a + b);
    let minMaxArray = [totalSum, 0];
    
    for (let i = 0; i < arr.length; i++){
        let sum = totalSum - arr[i]; 
        let [min, max] = minMaxArray;
    
        if (sum > max) minMaxArray[1] = sum;
        if (sum < min) minMaxArray[0] = sum;
    }
    
    return minMaxArray.join(' ');
}
