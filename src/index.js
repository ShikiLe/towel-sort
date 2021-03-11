
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!arr || !arr.length) { 
    return 0; 
  }
  let sortedArr = [];
  for (let i = 0; i < matrix.length; i++) {
     
      if (i % 2 !== 0) {
        for (let j = matrix[i].length - 1; j >= 0 ; j--)  {
            sortedArr.push(matrix[i][j])
        }
      } else {
          for (let h = 0; h <= matrix[i].length -1; h++) {
              sortedArr.push(matrix[i][h])
          }
      }
     
  }
  return sortedArr;
}
