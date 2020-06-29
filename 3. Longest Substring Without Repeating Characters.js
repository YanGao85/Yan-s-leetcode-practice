/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  let sub = s[0];
  let long = 1;
  for (let i = 1; i < s.length; i++) {
    if (sub.indexOf(s[i]) !== -1) {
      sub = sub.slice(sub.indexOf(s[i]) + 1) + s[i];
    } else {
      sub += s[i];
      long = Math.max(long, sub.length);
    }
  }
  return long;
};
