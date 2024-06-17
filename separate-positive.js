// add whatever parameters you deem necessary
function separatePositive(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] > 0) {
      left++;
    } else if (arr[right] < 0) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr;
}
separatePositive([2, -1, -3, 6, -8, 10]); // [2, 10, 6, -3, -1, -8]
separatePositive([5, 10, -15, 20, 25]); // [5, 10, 25, 20, -15]
separatePositive([-5, 5]); // [5, -5]
separatePositive([1, 2, 3]); // [1, 2, 3]
