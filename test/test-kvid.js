import { assert } from 'chai';
import buildRandomVid, { DefaultCharBase } from '../src/index.js';


describe('Kvid', () => {

  const nonRandomSequence = n => [...(new Array(n)).keys()]; // [ 0, 1, ..., n ]

  it("should return a string of the specified length", () => {
    const vid = buildRandomVid(6);
    assert.isString(vid);
    assert.equal(vid.length, 6);
  });


  describe("charBase", () => {
    it("should default to charBase that skips the visually-confusing 0, O, 1, l characters", () => {
      assert.equal(DefaultCharBase.length, 32);

      const vid = buildRandomVid(32, {
        getRandomNumbers: nonRandomSequence
      });
      assert.equal(vid.length, 32);
      assert.equal(vid.slice(1, 4), 'bcd');
      assert.notMatch(vid, /[0O1l]+/ig);
    });
  });

});
