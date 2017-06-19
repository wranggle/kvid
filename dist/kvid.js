(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.kvid = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

var _kvid = _dereq_("./src/kvid.js");

var _kvid2 = _interopRequireDefault(_kvid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

module.exports = _kvid2.default;
module.exports.default = _kvid2.default;

},{"./src/kvid.js":2}],2:[function(_dereq_,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DefaultCharBase = 'abcdefghijkmnpqrstuvwxyz23456789'; // skipping chars that cause user confusion (the letter O and the number 0, letter L and number 1)
var DefaultIdLength = 8;

function buildRandomVid(size, opts) {
  opts = opts || {}; // tmp - babel experiment. cleanup
  var res = [];
  size = size || DefaultIdLength;
  var charBase = opts.charBase || DefaultCharBase; // todo: perhaps offer shortcut option to include the full 36 chars of lowercase letters and numbers

  var randoms = typeof opts.getRandomNumbers === 'function' ? opts.getRandomNumbers(size, charBase.length) : _getRandomNumbers(size, charBase.length);

  randoms.forEach(function (n) {
    res.push(DefaultCharBase.charAt(n));
  });
  return res.join('');
}

function _getRandomNumbers(size, charBaseLength) {
  if (global.crypto && crypto.getRandomValues) {
    var CryptoRange = Math.pow(2, 16); // todo: perhaps permit values of 8 or 32 as options? note: if so, must update both this and TypedArray and  this max value (eg, pow(2, 32)
    var annoyingApi = new Uint16Array(size);
    crypto.getRandomValues(annoyingApi);
    return annoyingApi.map(function (r) {
      return Math.floor(r * charBaseLength / CryptoRange);
    });
  } else {
    var randoms = [];
    for (var i = 0; i < size; i++) {
      randoms.push(Math.floor(Math.random() * charBaseLength));
    }
    return randoms;
  }
}

exports.default = buildRandomVid;
exports.DefaultCharBase = DefaultCharBase;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});