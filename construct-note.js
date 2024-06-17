// add whatever parameters you deem necessary
function toObj(str) {
  let obj = {};
  for (let letter of str) {
    obj[letter] = obj[letter] + 1 || 1;
  }
  return obj;
}

function constructNote(str1, str2) {
  if (!str2.length) return false;
  if (!str1.length) return true;
  const obj1 = toObj(str1);
  console.log("obj1:", obj1);
  const obj2 = toObj(str2);
  console.log("obj2:", obj2);

  for (let key in obj1) {
    if (!obj2[key]) return false;
    if (obj1[key] > obj2[key]) {
      return false;
    }
    return true;
  }
}
