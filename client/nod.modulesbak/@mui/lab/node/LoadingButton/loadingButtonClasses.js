"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getLoadingButtonUtilityClass = getLoadingButtonUtilityClass;

var _core = require("@mui/core");

function getLoadingButtonUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiLoadingButton', slot);
}

const loadingButtonClasses = (0, _core.generateUtilityClasses)('MuiLoadingButton', ['root', 'loading', 'loadingIndicator', 'loadingIndicatorCenter', 'loadingIndicatorStart', 'loadingIndicatorEnd', 'endIconLoadingEnd', 'startIconLoadingStart']);
var _default = loadingButtonClasses;
exports.default = _default;