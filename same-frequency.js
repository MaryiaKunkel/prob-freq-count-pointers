// add whatever parameters you deem necessary
function toMap(num) {
  const freqMap = new Map();
  for (let el of String(num)) {
    let elCount = freqMap.get(el) || 0;
    freqMap.set(el, elCount + 1);
  }
  return freqMap;
}

function sameFrequency(num1, num2) {
  if (String(num1).length !== String(num2).length) return false;
  const num1map = toMap(num1);
  const num2map = toMap(num2);
  if (num1map.size !== num2map.size) return false;
  for (let key of num1map.keys()) {
    if (num1map.get(key) !== num2map.get(key)) return false;
  }
  return true;
}

sameFrequency(34, 14); // false
sameFrequency(182, 281); // true

sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
