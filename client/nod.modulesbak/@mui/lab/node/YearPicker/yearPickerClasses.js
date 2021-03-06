"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getYearPickerUtilityClass = getYearPickerUtilityClass;

var _core = require("@mui/core");

function getYearPickerUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiYearPicker', slot);
}

const yearPickerClasses = (0, _core.generateUtilityClasses)('MuiYearPicker', ['root']);
var _default = yearPickerClasses;
exports.default = _default;