"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.between = between;
exports.getAmPmLabels = getAmPmLabels;

var _dateFormatter = require("./dateFormatter");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {*} value Value to return.
 * @param {*} min Minimum return value.
 * @param {*} max Maximum return value.
 */
function between(value, min, max) {
  if (min && min > value) {
    return min;
  }

  if (max && max < value) {
    return max;
  }

  return value;
}

var nines = ['9', '٩'];
var ninesRegExp = new RegExp("[".concat(nines.join(''), "]"));
var amPmFormatter = (0, _dateFormatter.getFormatter)({
  hour: 'numeric'
});

function getAmPmLabels(locale) {
  var amString = amPmFormatter(locale, new Date(2017, 0, 1, 9));
  var pmString = amPmFormatter(locale, new Date(2017, 0, 1, 21));

  var _amString$split = amString.split(ninesRegExp),
      _amString$split2 = _slicedToArray(_amString$split, 2),
      am1 = _amString$split2[0],
      am2 = _amString$split2[1];

  var _pmString$split = pmString.split(ninesRegExp),
      _pmString$split2 = _slicedToArray(_pmString$split, 2),
      pm1 = _pmString$split2[0],
      pm2 = _pmString$split2[1];

  if (pm2 !== undefined) {
    // If pm2 is undefined, nine was not found in pmString - this locale is not using 12-hour time
    if (am1 !== pm1) {
      return [am1, pm1].map(function (el) {
        return el.trim();
      });
    }

    if (am2 !== pm2) {
      return [am2, pm2].map(function (el) {
        return el.trim();
      });
    }
  } // Fallback


  return ['AM', 'PM'];
}