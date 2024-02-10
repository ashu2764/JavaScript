/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15

Note: |x| is the absolute value of x
*/

function diagonalDifference(arr) {
let leftDiagonalSum = 0;
let rightDiagonalSum = 0;
const n = arr.length;

for (let i = 0; i < n; i++){
    leftDiagonalSum += arr[i][i];
    rightDiagonalSum += arr[i][n-1-i];

}
const absDiff = Math.abs(leftDiagonalSum - rightDiagonalSum);
return absDiff;
console.log(absDiff)

}
console.log(diagonalDifference([[1,4,7],[7,9,5],[8,6,9]])) /// answer ----->5
/*----> Code Explanation
1> Take two variable one for left diagonal and another for right dignol and initilize with zero.
2 Run a for loop in array  to access all items in array.
3 > add values in leftdiagonal >>> leftDiagonalSum = leftDiagonalSum + arr[i][i] in short leftDiagonalSum += arr[i][i].
     [
        [1,4]
        [1,2]
     ]
    >> for arr[i][i]:
                        arr[0][0]---> 1
                        arr[1][1]---> 2

    >>  for arr[i][n-1-i]:

                            arr[0][2-1-0] = arr[0][1]
                            arr[1][2-1-1]= arr[1][0]

 after for loof declare another variablle to store the difference 
 here  i use Math.abs to take absolute difference.
  for eg : --> const absDiff = Math.abs(leftDiagonal - rightDiagonal)
*/