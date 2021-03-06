"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warnOnDev = exports.isProduction = void 0;

/**
 * Checks whether we're running on a production build or not.
 */
var isProduction = process.env.NODE_ENV === 'production';
exports.isProduction = isProduction;

var consoleOnDev = function consoleOnDev(method) {
  if (!isProduction) {
    var _console;

    for (var _len = arguments.length, message = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      message[_key - 1] = arguments[_key];
    }

    // eslint-disable-next-line no-console
    (_console = console)[method].apply(_console, message);
  }
};

var warnOnDev = function warnOnDev() {
  for (var _len2 = arguments.length, message = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    message[_key2] = arguments[_key2];
  }

  return consoleOnDev.apply(void 0, ['warn'].concat(message));
};

exports.warnOnDev = warnOnDev;