function makeFreqCounter(str) {
  const freq = new Map();
  for (let val of str) {
    let valCount = freq.get(val) || 0;
    freq.set(val, valCount + 1);
  }
  return freq;
}

function validAnagram(str1, str2) {
  if (str2.length !== str1.length) return false;

  const map1 = makeFreqCounter(str1);
  const map2 = makeFreqCounter(str2);
  if (map1.size !== map2.size) return false;
  for (let letter in map1.keys()) {
    if (map2.get(letter) !== map1.get(letter)) return false;
  }
  return true;
}
validAnagram("", "");
validAnagram("aaz", "zza");
validAnagram("qwerty", "qewtry");
validAnagram("anagram", "nagaram");
validAnagram("rat", "car");
validAnagram("awesome", "awesom");
validAnagram("texttwisttime", "timetwisttext");
