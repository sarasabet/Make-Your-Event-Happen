import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _extends from "@babel/runtime/helpers/esm/extends";
import { unstable_composeClasses as composeClasses } from '@mui/core';
import { styled, useThemeProps } from '@mui/material/styles';
import { createUnarySpacing, getValue, handleBreakpoints, unstable_resolveBreakpointValues as resolveBreakpointValues } from '@mui/system';
import { deepmerge, unstable_useForkRef as useForkRef } from '@mui/utils';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as React from 'react';
import { getMasonryUtilityClass } from './masonryClasses';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes;
  var slots = {
    root: ['root']
  };
  return composeClasses(slots, getMasonryUtilityClass, classes);
}; // compute base for responsive values; e.g.,
// [1,2,3] => {xs: true, sm: true, md: true}
// {xs: 1, sm: 2, md: 3} => {xs: true, sm: true, md: true}


var computeBreakpointsBase = function computeBreakpointsBase(breakpoints, prop) {
  var base = {};

  if (Array.isArray(prop)) {
    Object.keys(breakpoints.values).forEach(function (breakpoint, i, arr) {
      if (i < arr.length) {
        base[breakpoint] = true;
      }
    });
  } else {
    Object.keys(breakpoints.values).forEach(function (breakpoint) {
      if (prop[breakpoint] != null) {
        base[breakpoint] = true;
      }
    });
  }

  return base;
}; // if prop is an array, convert to object; e.g.,
// (base: {xs: true, sm: true, md: true}, prop: [1,2,3]) => {xs: 1, sm: 2, md: 3}


var validatePropValues = function validatePropValues(base, prop) {
  var values = {};

  if (Array.isArray(prop)) {
    Object.keys(base).forEach(function (breakpoint, i) {
      values[breakpoint] = prop[i];
    });
    return values;
  }

  return prop;
};

export var getStyle = function getStyle(_ref) {
  var ownerState = _ref.ownerState,
      theme = _ref.theme;
  var styles = {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'space-between',
    boxSizing: 'border-box',
    '& > *': {
      boxSizing: 'border-box'
    }
  };
  var stylesSSR = {};

  if (ownerState.isSSR) {
    var orderStyleSSR = {};
    var defaultSpacing = Number(theme.spacing(ownerState.defaultSpacing).replace('px', ''));

    for (var i = 1; i <= ownerState.defaultColumns; i += 1) {
      orderStyleSSR["&:nth-of-type(".concat(ownerState.defaultColumns, "n+").concat(i % ownerState.defaultColumns, ")")] = {
        order: i
      };
    }

    stylesSSR.height = ownerState.defaultHeight;
    stylesSSR.margin = -(defaultSpacing / 2);
    stylesSSR['& > *'] = _extends({}, styles['& > *'], orderStyleSSR, {
      margin: defaultSpacing / 2,
      width: "calc(".concat((100 / ownerState.defaultColumns).toFixed(2), "% - ").concat(defaultSpacing, "px)")
    });
    return _extends({}, styles, stylesSSR);
  }

  var spacingBreakpointsBase = computeBreakpointsBase(theme.breakpoints, ownerState.spacing);
  var spacingValues = resolveBreakpointValues({
    values: validatePropValues(spacingBreakpointsBase, ownerState.spacing),
    base: spacingBreakpointsBase
  });
  var transformer = createUnarySpacing(theme);

  var spacingStyleFromPropValue = function spacingStyleFromPropValue(propValue) {
    var themeSpacingValue = Number(propValue);
    var spacing = Number(getValue(transformer, themeSpacingValue).replace('px', ''));
    return _extends({
      margin: -(spacing / 2),
      '& > *': {
        margin: spacing / 2
      }
    }, ownerState.maxColumnHeight && {
      height: Math.ceil(ownerState.maxColumnHeight + spacing)
    });
  };

  styles = deepmerge(styles, handleBreakpoints({
    theme: theme
  }, spacingValues, spacingStyleFromPropValue));
  var columnBreakpointsBase = computeBreakpointsBase(theme.breakpoints, ownerState.columns);
  var columnValues = resolveBreakpointValues({
    values: validatePropValues(columnBreakpointsBase, ownerState.columns),
    base: columnBreakpointsBase
  });

  var columnStyleFromPropValue = function columnStyleFromPropValue(propValue) {
    var columnValue = Number(propValue);
    var width = "".concat((100 / columnValue).toFixed(2), "%");
    var spacing = _typeof(spacingValues) !== 'object' ? getValue(transformer, Number(spacingValues)) : '0px';
    return {
      '& > *': {
        width: "calc(".concat(width, " - ").concat(spacing, ")")
      }
    };
  };

  styles = deepmerge(styles, handleBreakpoints({
    theme: theme
  }, columnValues, columnStyleFromPropValue)); // configure width for responsive spacing values

  if (_typeof(spacingValues) === 'object') {
    styles = deepmerge(styles, handleBreakpoints({
      theme: theme
    }, spacingValues, function (propValue, breakpoint) {
      if (breakpoint) {
        var themeSpacingValue = Number(propValue);
        var lastBreakpoint = Object.keys(columnValues).pop();
        var spacing = getValue(transformer, themeSpacingValue);
        var column = _typeof(columnValues) === 'object' ? columnValues[breakpoint] || columnValues[lastBreakpoint] : columnValues;
        var width = "".concat((100 / column).toFixed(2), "%");
        return {
          '& > *': {
            width: "calc(".concat(width, " - ").concat(spacing, ")")
          }
        };
      }

      return null;
    }));
  }

  return styles;
};
var MasonryRoot = styled('div', {
  name: 'MuiMasonry',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    return [styles.root];
  }
})(getStyle);
var Masonry = /*#__PURE__*/React.forwardRef(function Masonry(inProps, ref) {
  var props = useThemeProps({
    props: inProps,
    name: 'MuiMasonry'
  });

  var children = props.children,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'div' : _props$component,
      _props$columns = props.columns,
      columns = _props$columns === void 0 ? 4 : _props$columns,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 1 : _props$spacing,
      defaultColumns = props.defaultColumns,
      defaultHeight = props.defaultHeight,
      defaultSpacing = props.defaultSpacing,
      other = _objectWithoutProperties(props, ["children", "className", "component", "columns", "spacing", "defaultColumns", "defaultHeight", "defaultSpacing"]);

  var masonryRef = React.useRef();

  var _React$useState = React.useState(),
      maxColumnHeight = _React$useState[0],
      setMaxColumnHeight = _React$useState[1];

  var isSSR = !maxColumnHeight && defaultHeight && defaultColumns !== undefined && defaultSpacing !== undefined;

  var _React$useState2 = React.useState(isSSR ? defaultColumns - 1 : 0),
      numberOfLineBreaks = _React$useState2[0],
      setNumberOfLineBreaks = _React$useState2[1];

  var ownerState = _extends({}, props, {
    spacing: spacing,
    columns: columns,
    maxColumnHeight: maxColumnHeight,
    defaultColumns: defaultColumns,
    defaultHeight: defaultHeight,
    defaultSpacing: defaultSpacing,
    isSSR: isSSR
  });

  var classes = useUtilityClasses(ownerState);
  React.useEffect(function () {
    var handleResize = function handleResize() {
      var parentWidth = masonryRef.current.clientWidth;
      var childWidth = masonryRef.current.firstChild.clientWidth;
      var firstChildComputedStyle = window.getComputedStyle(masonryRef.current.firstChild);
      var firstChildMarginLeft = Number(firstChildComputedStyle.marginLeft.replace('px', ''));
      var firstChildMarginRight = Number(firstChildComputedStyle.marginRight.replace('px', ''));

      if (parentWidth === 0 || childWidth === 0) {
        return;
      }

      var currentNumberOfColumns = Math.round(parentWidth / (childWidth + firstChildMarginLeft + firstChildMarginRight));
      var columnHeights = new Array(currentNumberOfColumns).fill(0);
      var skip = false;
      masonryRef.current.childNodes.forEach(function (child) {
        if (child.nodeType !== Node.ELEMENT_NODE || child.dataset.class === 'line-break' || skip) {
          return;
        }

        var childComputedStyle = window.getComputedStyle(child);
        var childMarginTop = Number(childComputedStyle.marginTop.replace('px', ''));
        var childMarginBottom = Number(childComputedStyle.marginBottom.replace('px', '')); // if any one of children isn't rendered yet, masonry's height shouldn't be computed yet

        var childHeight = child.clientHeight ? Math.ceil(child.clientHeight) + childMarginTop + childMarginBottom : 0;

        if (childHeight === 0) {
          skip = true;
          return;
        } // if there is a nested image that isn't rendered yet, masonry's height shouldn't be computed yet


        for (var i = 0; i < child.childNodes.length; i += 1) {
          var nestedChild = child.childNodes[i];

          if (nestedChild.tagName === 'IMG' && nestedChild.clientHeight === 0) {
            skip = true;
            break;
          }
        }

        if (!skip) {
          // find the current shortest column (where the current item will be placed)
          var currentMinColumnIndex = columnHeights.indexOf(Math.min.apply(Math, _toConsumableArray(columnHeights)));
          columnHeights[currentMinColumnIndex] += childHeight;
          var order = currentMinColumnIndex + 1;
          child.style.order = order;
        }
      });

      if (!skip) {
        setMaxColumnHeight(Math.max.apply(Math, _toConsumableArray(columnHeights)));
        var numOfLineBreaks = currentNumberOfColumns > 0 ? currentNumberOfColumns - 1 : 0;
        setNumberOfLineBreaks(numOfLineBreaks);
      }
    }; // IE and old browsers are not supported


    if (typeof ResizeObserver === 'undefined') {
      return null;
    }

    var resizeObserver = new ResizeObserver(handleResize);
    var container = masonryRef.current;

    if (container) {
      // only the masonry container and its first child are observed for resizing;
      // this might cause unforeseen problems in some use cases;
      resizeObserver.observe(container);

      if (container.firstChild) {
        resizeObserver.observe(container.firstChild);
      }
    }

    return function () {
      resizeObserver.disconnect();
    };
  }, [columns, spacing]);
  var handleRef = useForkRef(ref, masonryRef);
  var lineBreakStyle = {
    flexBasis: '100%',
    width: 0,
    margin: 0,
    padding: 0
  }; //  columns are likely to have different heights and hence can start to merge;
  //  a line break at the end of each column prevents columns from merging

  var lineBreaks = new Array(numberOfLineBreaks).fill('').map(function (_, index) {
    return /*#__PURE__*/_jsx("span", {
      "data-class": "line-break",
      style: _extends({}, lineBreakStyle, {
        order: index + 1
      })
    }, index);
  });
  return /*#__PURE__*/_jsxs(MasonryRoot, _extends({
    as: component,
    className: clsx(classes.root, className),
    ref: handleRef,
    ownerState: ownerState
  }, other, {
    children: [children, lineBreaks]
  }));
});
process.env.NODE_ENV !== "production" ? Masonry.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: PropTypes
  /* @typescript-to-proptypes-ignore */
  .node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Number of columns.
   * @default 4
   */
  columns: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * The default number of columns of the component. This is provided for server-side rendering.
   */
  defaultColumns: PropTypes.number,

  /**
   * The default height of the component in px. This is provided for server-side rendering.
   */
  defaultHeight: PropTypes.number,

  /**
   * The default spacing of the component. Like `spacing`, it is a factor of the theme's spacing. This is provided for server-side rendering.
   */
  defaultSpacing: PropTypes.number,

  /**
   * Defines the space between children. It is a factor of the theme's spacing.
   * @default 1
   */
  spacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),

  /**
   * Allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
} : void 0;
export default Masonry;