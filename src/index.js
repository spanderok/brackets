module.exports = function check(str, bracketsConfig) {
  let strLength = str.length / 2
  do {
      for (let x of bracketsConfig) {
          str = str.replace(x[0] + x[1], '');
      }
      strLength--
  } while (strLength > 0)
  if (str.length === 0) { return true }
  return false
}