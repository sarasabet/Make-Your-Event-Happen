"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.borderRadius = exports.borderLeftColor = exports.borderBottomColor = exports.borderRightColor = exports.borderTopColor = exports.borderColor = exports.borderLeft = exports.borderBottom = exports.borderRight = exports.borderTop = exports.border = void 0;

var _responsivePropType = _interopRequireDefault(require("./responsivePropType"));

var _style = _interopRequireDefault(require("./style"));

var _compose = _interopRequireDefault(require("./compose"));

var _spacing = require("./spacing");

var _breakpoints = require("./breakpoints");

function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return `${value}px solid`;
}

const border = (0, _style.default)({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
exports.border = border;
const borderTop = (0, _style.default)({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
exports.borderTop = borderTop;
const borderRight = (0, _style.default)({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
exports.borderRight = borderRight;
const borderBottom = (0, _style.default)({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
exports.borderBottom = borderBottom;
const borderLeft = (0, _style.default)({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
exports.borderLeft = borderLeft;
const borderColor = (0, _style.default)({
  prop: 'borderColor',
  themeKey: 'palette'
});
exports.borderColor = borderColor;
const borderTopColor = (0, _style.default)({
  prop: 'borderTopColor',
  themeKey: 'palette'
});
exports.borderTopColor = borderTopColor;
const borderRightColor = (0, _style.default)({
  prop: 'borderRightColor',
  themeKey: 'palette'
});
exports.borderRightColor = borderRightColor;
const borderBottomColor = (0, _style.default)({
  prop: 'borderBottomColor',
  themeKey: 'palette'
});
exports.borderBottomColor = borderBottomColor;
const borderLeftColor = (0, _style.default)({
  prop: 'borderLeftColor',
  themeKey: 'palette'
});
exports.borderLeftColor = borderLeftColor;

const borderRadius = props => {
  if (props.borderRadius) {
    const transformer = (0, _spacing.createUnaryUnit)(props.theme, 'shape.borderRadius', 4, 'borderRadius');

    const styleFromPropValue = propValue => ({
      borderRadius: (0, _spacing.getValue)(transformer, propValue)
    });

    return (0, _breakpoints.handleBreakpoints)(props, props.borderRadius, styleFromPropValue);
  }

  return null;
};

exports.borderRadius = borderRadius;
borderRadius.propTypes = process.env.NODE_ENV !== 'production' ? {
  borderRadius: _responsivePropType.default
} : {};
borderRadius.filterProps = ['borderRadius'];
const borders = (0, _compose.default)(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
var _default = borders;
exports.default = _default;