// add whatever parameters you deem necessary
function twoArrayObject(lettersArr, numsArr) {
  let obj = {};
  let count = 0;
  while (count < lettersArr.length) {
    if (lettersArr[count]) {
      if (!numsArr[count]) {
        obj[lettersArr[count]] = null;
      } else {
        obj[lettersArr[count]] = numsArr[count];
      }
    } else {
      return obj;
    }
    count++;
  }
  return obj;
}
twoArrayObject(["a", "b", "c", "d"], [1, 2, 3]); // {'a': 1, 'b': 2, 'c': 3, 'd': null}
twoArrayObject(["a", "b", "c"], [1, 2, 3, 4]); // {'a': 1, 'b': 2, 'c': 3}
twoArrayObject(["x", "y", "z"], [1, 2]); // {'x': 1, 'y': 2, 'z': null}
