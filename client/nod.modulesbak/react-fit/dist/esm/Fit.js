var _excluded = ["invertAxis", "invertSecondaryAxis"];

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import detectElementOverflow from 'detect-element-overflow';
import { warnOnDev } from './shared/utils';
var isBrowser = typeof window !== 'undefined';
var isDisplayContentsSupported = isBrowser && 'CSS' in window && 'supports' in window.CSS && CSS.supports('display', 'contents');
var isMutationObserverSupported = isBrowser && 'MutationObserver' in window;

function capitalize(a) {
  return a[0].toUpperCase() + a.slice(1);
}

function findScrollContainer(element) {
  if (!element) {
    return undefined;
  }

  var parent = element.parentElement;

  while (parent) {
    var _window$getComputedSt = window.getComputedStyle(parent),
        overflow = _window$getComputedSt.overflow;

    if (overflow.split(' ').every(function (o) {
      return o === 'auto' || o === 'scroll';
    })) {
      return parent;
    }

    parent = parent.parentElement;
  }

  return document.documentElement;
}

function alignAxis(_ref) {
  var axis = _ref.axis,
      container = _ref.container,
      element = _ref.element,
      invertAxis = _ref.invertAxis,
      secondary = _ref.secondary,
      scrollContainer = _ref.scrollContainer,
      spacing = _ref.spacing;
  var style = window.getComputedStyle(element);
  var parent = container.parentElement;
  var scrollContainerCollisions = detectElementOverflow(parent, scrollContainer);
  var documentCollisions = detectElementOverflow(parent, document.documentElement);
  var isX = axis === 'x';
  var startProperty = isX ? 'left' : 'top';
  var endProperty = isX ? 'right' : 'bottom';
  var sizeProperty = isX ? 'width' : 'height';
  var overflowStartProperty = "overflow".concat(capitalize(startProperty));
  var overflowEndProperty = "overflow".concat(capitalize(endProperty));
  var scrollProperty = "scroll".concat(capitalize(startProperty));
  var uppercasedSizeProperty = capitalize(sizeProperty);
  var offsetSizeProperty = "offset".concat(uppercasedSizeProperty);
  var clientSizeProperty = "client".concat(uppercasedSizeProperty);
  var minSizeProperty = "min-".concat(sizeProperty);
  var scrollbarWidth = scrollContainer[offsetSizeProperty] - scrollContainer[clientSizeProperty];
  var startSpacing = _typeof(spacing) === 'object' ? spacing[startProperty] : spacing;
  var availableStartSpace = -Math.max(scrollContainerCollisions[overflowStartProperty], documentCollisions[overflowStartProperty] + document.documentElement[scrollProperty]) - startSpacing;
  var endSpacing = _typeof(spacing) === 'object' ? spacing[endProperty] : spacing;
  var availableEndSpace = -Math.max(scrollContainerCollisions[overflowEndProperty], documentCollisions[overflowEndProperty] - document.documentElement[scrollProperty]) - endSpacing - scrollbarWidth;

  if (secondary) {
    availableStartSpace += parent[clientSizeProperty];
    availableEndSpace += parent[clientSizeProperty];
  }

  var offsetSize = element[offsetSizeProperty];

  function displayStart() {
    element.style[startProperty] = 'auto';
    element.style[endProperty] = secondary ? '0' : '100%';
  }

  function displayEnd() {
    element.style[startProperty] = secondary ? '0' : '100%';
    element.style[endProperty] = 'auto';
  }

  function displayIfFits(availableSpace, display) {
    var fits = offsetSize <= availableSpace;

    if (fits) {
      display();
    }

    return fits;
  }

  function displayStartIfFits() {
    return displayIfFits(availableStartSpace, displayStart);
  }

  function displayEndIfFits() {
    return displayIfFits(availableEndSpace, displayEnd);
  }

  function displayWhereverShrinkedFits() {
    var moreSpaceStart = availableStartSpace > availableEndSpace;
    var minSize = style[minSizeProperty] && parseInt(style[minSizeProperty], 10);

    function shrinkToSize(size) {
      if (minSize && size < minSize) {
        warnOnDev("<Fit />'s child will not fit anywhere with its current ".concat(minSizeProperty, " of ").concat(minSize, "px."));
      }

      var newSize = Math.max(size, minSize || 0);
      warnOnDev("<Fit />'s child needed to have its ".concat(sizeProperty, " decreased to ").concat(newSize, "px."));
      element.style[sizeProperty] = "".concat(newSize, "px");
    }

    if (moreSpaceStart) {
      shrinkToSize(availableStartSpace);
      displayStart();
    } else {
      shrinkToSize(availableEndSpace);
      displayEnd();
    }
  }

  var fits;

  if (invertAxis) {
    fits = displayStartIfFits() || displayEndIfFits();
  } else {
    fits = displayEndIfFits() || displayStartIfFits();
  }

  if (!fits) {
    displayWhereverShrinkedFits();
  }
}

function alignMainAxis(args) {
  alignAxis(args);
}

function alignSecondaryAxis(args) {
  alignAxis(_objectSpread(_objectSpread({}, args), {}, {
    axis: args.axis === 'x' ? 'y' : 'x',
    secondary: true
  }));
}

function alignBothAxis(args) {
  var invertAxis = args.invertAxis,
      invertSecondaryAxis = args.invertSecondaryAxis,
      commonArgs = _objectWithoutProperties(args, _excluded);

  alignMainAxis(_objectSpread(_objectSpread({}, commonArgs), {}, {
    invertAxis: invertAxis
  }));
  alignSecondaryAxis(_objectSpread(_objectSpread({}, commonArgs), {}, {
    invertAxis: invertSecondaryAxis
  }));
}

var Fit = /*#__PURE__*/function (_Component) {
  _inherits(Fit, _Component);

  var _super = _createSuper(Fit);

  function Fit() {
    var _this;

    _classCallCheck(this, Fit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onMutation", function () {
      _this.fit();
    });

    _defineProperty(_assertThisInitialized(_this), "mutationObserver", isMutationObserverSupported && new MutationObserver(_this.onMutation));

    _defineProperty(_assertThisInitialized(_this), "fit", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          scrollContainer = _assertThisInitialize.scrollContainer,
          container = _assertThisInitialize.container,
          element = _assertThisInitialize.element;

      if (!element) {
        return;
      }

      var elementWidth = element.clientWidth;
      var elementHeight = element.clientHeight; // No need to recalculate - already did that for current dimensions

      if (_this.elementWidth === elementWidth && _this.elementHeight === elementHeight) {
        return;
      } // Save the dimensions so that we know we don't need to repeat the function if unchanged


      _this.elementWidth = elementWidth;
      _this.elementHeight = elementHeight;
      var parent = container.parentElement; // Container was unmounted

      if (!parent) {
        return;
      }
      /**
       * We need to ensure that <Fit />'s child has a absolute position. Otherwise,
       * we wouldn't be able to place the child in the correct position.
       */


      var style = window.getComputedStyle(element);
      var position = style.position;

      if (position !== 'absolute') {
        warnOnDev('<Fit />\'s child does not have absolute position. You should apply `position: absolute` to it.');
        element.style.position = 'absolute';
      }
      /**
       * We need to ensure that <Fit />'s parent has a relative position. Otherwise,
       * we wouldn't be able to place the child in the correct position.
       */


      var parentStyle = window.getComputedStyle(parent);
      var parentPosition = parentStyle.position;

      if (parentPosition !== 'relative' && parentPosition !== 'absolute') {
        warnOnDev('<Fit />\'s parent does not have relative position. You should apply `position: relative` to it.');
        parent.style.position = 'relative';
      }

      var _this$props = _this.props,
          invertAxis = _this$props.invertAxis,
          invertSecondaryAxis = _this$props.invertSecondaryAxis,
          mainAxis = _this$props.mainAxis,
          spacing = _this$props.spacing;
      alignBothAxis({
        container: container,
        element: element,
        invertAxis: invertAxis,
        invertSecondaryAxis: invertSecondaryAxis,
        axis: mainAxis,
        scrollContainer: scrollContainer,
        spacing: spacing
      });
    });

    return _this;
  }

  _createClass(Fit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!isDisplayContentsSupported) {
        // eslint-disable-next-line react/no-find-dom-node
        var element = findDOMNode(this);
        this.container = element;
        this.element = element;
        this.scrollContainer = findScrollContainer(element);
      }

      this.fit();

      if (isMutationObserverSupported) {
        this.mutationObserver.observe(this.element, {
          attributes: true,
          attributeFilter: ['class', 'style']
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var child = React.Children.only(children);

      if (isDisplayContentsSupported) {
        return /*#__PURE__*/React.createElement("span", {
          ref: function ref(container) {
            _this2.container = container;
            var element = container && container.firstChild;
            _this2.element = element;
            _this2.scrollContainer = findScrollContainer(element);
          },
          style: {
            display: 'contents'
          }
        }, child);
      }

      return child;
    }
  }]);

  return Fit;
}(Component);

export { Fit as default };
Fit.propTypes = {
  children: PropTypes.node,
  invertAxis: PropTypes.bool,
  invertSecondaryAxis: PropTypes.bool,
  mainAxis: PropTypes.oneOf(['x', 'y']),
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired
  })])
};
Fit.defaultProps = {
  mainAxis: 'y',
  spacing: 8
};