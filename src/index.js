const DefaultCharBase = 'abcdefghijkmnpqrstuvwxyz23456789'; // skipping chars that cause user confusion (the letter O and the number 0, letter L and number 1)
const DefaultIdLength = 8;


function buildRandomVid(size, opts) {
  opts = opts || {}; // tmp - babel experiment. cleanup
  const res = [];
  size = size || DefaultIdLength;
  const charBase = opts.charBase || DefaultCharBase; // todo: perhaps offer shortcut option to include the full 36 chars of lowercase letters and numbers

  const randoms = typeof opts.getRandomNumbers === 'function' ?
    opts.getRandomNumbers(size, charBase.length) :
    _getRandomNumbers(size, charBase.length);

  randoms.forEach(function(n) {
    res.push(DefaultCharBase.charAt(n));
  });
  return res.join('');
}


function _getRandomNumbers(size, charBaseLength) {
  if (global.crypto && crypto.getRandomValues) {
    const CryptoRange = Math.pow(2, 16); // todo: perhaps permit values of 8 or 32 as options? note: if so, must update both this and TypedArray and  this max value (eg, pow(2, 32)
    const annoyingApi = new Uint16Array(size);
    crypto.getRandomValues(annoyingApi);
    return annoyingApi.map(r => Math.floor(r * charBaseLength / CryptoRange));
  } else {
    const randoms = [];
    for (let i = 0; i < size; i++) {
      randoms.push(Math.floor(Math.random() * charBaseLength));
    }
    return randoms;
  }
}


export default buildRandomVid;
export {
  DefaultCharBase
}
