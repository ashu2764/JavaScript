/*
We have defined a function called countUp with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [1,2,3,4,5]. Your function must use recursion by calling itself and must not use loops of any kind.
*/

function countUp(n){
    const result = n < 1 ? []
    : [...countUp(n-1), n]
    return result
}


function countUp(n){
    if (n < 1){
        return [];
    }
    else{
        const arr = countUp(n-1);
        arr.push(n);
        return arr
    }
}


console.log(countUp(6))// [ 1, 2, 3, 4, 5, 6 ]