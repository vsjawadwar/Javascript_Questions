/*
Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right). 
Example:
[1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
[1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false
*/
function diagonalMatrixCheck(matrix){
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix.length;j++){
            if(i !== j && matrix[i][j] !== 0){
                return false;
            }
        }
    }
    return true;
}
console.log(diagonalMatrixCheck([[1,0,0],[0,2,0],[0,0,3]]));
console.log(diagonalMatrixCheck([[1,0,0],[0,2,0],[0,2,3]]));

