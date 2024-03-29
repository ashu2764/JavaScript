/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10 ^ -4 are acceptable.

Example
arr = [1,1,0,-1,-1]
There are 5 elements, two positive, two negative and one zero. Their ratios are 
2/5 = 0.400000,
2/5 = 0.400000,
and
1/5 = 0.200000.
Results are printed as:

2/5 = 0.400000
2/5 = 0.400000
1/5 = 0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  6 digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer,n , the size of the array.
The second line contains  space-separated integers that describe arr[n] .

Constraints
0<n<=100
-100<= arr[i]<= 100


Output Format

Print the following 3  lines, each to 6 decimals:

proportion of positive values
proportion of negative values
proportion of zeros
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]

*/
function plusMinus(arr){
//Assign variables    
    const n = arr.length;
    let posValCount = 0;
    let negValCount = 0;
    let zeroValCount = 0;
//accessing all elements using for loop and applying conditions
    for (let i = 0; i < n; i++){
        if (arr[i] > 0){
            posValCount++
        }else if(arr[i] < 0){
            negValCount++
        }else{
            zeroValCount++
        }
    }
// find the ratio of numbers 
    let posValRatio = posValCount/n;
    let negValRatio = negValCount/n;
    let zeroValRatio = zeroValCount/n
    
// now print using console 
console.log(posValRatio.toPrecision(6))
console.log(negValRatio.toPrecision(6))
console.log(zeroValRatio.toPrecision(6))


}

//test case :

let testCase = [1,1,0,-1,-1]
plusMinus(testCase)

/*
Output ---->
0.400000
0.400000
0.200000

*/