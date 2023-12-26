const removeFromArray = function (arr, toRemove) {
  return arr.filter((val) => !toRemove.includes(val));
};

removeFromArray([1, 2, 3, 4], [3, 2]);
// Do not edit below this line
module.exports = removeFromArray;
