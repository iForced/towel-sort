
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resArr = [];
  if (matrix == undefined) {
    return [];
  }
  matrix.forEach((item, index) => {
    if(index % 2 !== 0) {
        item.reverse();
    };
    resArr = resArr.concat(item);
  })
  return resArr;
}
