/*
Given an array of integers, find the sum of its elements.

For example, if the array , , so return .

Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):

ar: an array of integers
Input Format

The first line contains an integer, , denoting the size of the array.
The second line contains  space-separated integers representing the array's elements.

Constraints


Output Format

Print the sum of the array's elements as a single integer.

Sample Input

6
1 2 3 4 10 11
Sample Output
*/

function simpleArraySum(ar) {
    let arrCount = 0;

    for (let i = 0; i<ar.length; i++){
        arrCount += ar[i];
    }
    return arrCount;


}
console.log(simpleArraySum([6,8,9])) // 23