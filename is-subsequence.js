// add whatever parameters you deem necessary
function isSubsequence(word, str) {
  let countWord = 0;
  let countStr = 0;
  while (countWord < word.length && countStr < str.length) {
    if (word[countWord] === str[countStr]) {
      countWord++;
      countStr++;
    } else if (word[countWord] !== str[countStr]) {
      countStr++;
    }
  }
  if (countWord === word.length) return true;
  return false;
}
isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)
