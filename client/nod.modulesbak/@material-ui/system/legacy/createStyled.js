import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import styledEngineStyled from '@material-ui/styled-engine';
import { getDisplayName } from '@material-ui/utils';
import createTheme from './createTheme';
import styleFunctionSx from './styleFunctionSx';
import propsToClassKey from './propsToClassKey';

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

var getStyleOverrides = function getStyleOverrides(name, theme) {
  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
    return theme.components[name].styleOverrides;
  }

  return null;
};

var getVariantStyles = function getVariantStyles(name, theme) {
  var variants = [];

  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
    variants = theme.components[name].variants;
  }

  var variantsStyles = {};
  variants.forEach(function (definition) {
    var key = propsToClassKey(definition.props);
    variantsStyles[key] = definition.style;
  });
  return variantsStyles;
};

var variantsResolver = function variantsResolver(props, styles, theme, name) {
  var _theme$components, _theme$components$nam;

  var _props$ownerState = props.ownerState,
      ownerState = _props$ownerState === void 0 ? {} : _props$ownerState;
  var variantsStyles = [];
  var themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;

  if (themeVariants) {
    themeVariants.forEach(function (themeVariant) {
      var isMatch = true;
      Object.keys(themeVariant.props).forEach(function (key) {
        if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
          isMatch = false;
        }
      });

      if (isMatch) {
        variantsStyles.push(styles[propsToClassKey(themeVariant.props)]);
      }
    });
  }

  return variantsStyles;
};

export function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
export var systemDefaultTheme = createTheme();

var lowercaseFirstLetter = function lowercaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export default function createStyled() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _input$defaultTheme = input.defaultTheme,
      defaultTheme = _input$defaultTheme === void 0 ? systemDefaultTheme : _input$defaultTheme,
      _input$rootShouldForw = input.rootShouldForwardProp,
      rootShouldForwardProp = _input$rootShouldForw === void 0 ? shouldForwardProp : _input$rootShouldForw,
      _input$slotShouldForw = input.slotShouldForwardProp,
      slotShouldForwardProp = _input$slotShouldForw === void 0 ? shouldForwardProp : _input$slotShouldForw;
  return function (tag) {
    var inputOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var componentName = inputOptions.name,
        componentSlot = inputOptions.slot,
        inputSkipVariantsResolver = inputOptions.skipVariantsResolver,
        inputSkipSx = inputOptions.skipSx,
        overridesResolver = inputOptions.overridesResolver,
        options = _objectWithoutProperties(inputOptions, ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"]); // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.


    var skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : componentSlot && componentSlot !== 'Root' || false;
    var skipSx = inputSkipSx || false;
    var className;

    if (componentName) {
      className = "".concat(componentName, "-").concat(lowercaseFirstLetter(componentSlot || 'Root'));
    }

    var shouldForwardPropOption = shouldForwardProp;

    if (componentSlot === 'Root') {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      // any other slot specified
      shouldForwardPropOption = slotShouldForwardProp;
    }

    var defaultStyledResolver = styledEngineStyled(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label: className || componentName || ''
    }, options));

    var muiStyledResolver = function muiStyledResolver(styleArg) {
      for (var _len = arguments.length, expressions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        expressions[_key - 1] = arguments[_key];
      }

      var expressionsWithDefaultTheme = expressions ? expressions.map(function (stylesArg) {
        return typeof stylesArg === 'function' ? function (_ref) {
          var themeInput = _ref.theme,
              other = _objectWithoutProperties(_ref, ["theme"]);

          return stylesArg(_extends({
            theme: isEmpty(themeInput) ? defaultTheme : themeInput
          }, other));
        } : stylesArg;
      }) : [];
      var transformedStyleArg = styleArg;

      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push(function (props) {
          var theme = isEmpty(props.theme) ? defaultTheme : props.theme;
          var styleOverrides = getStyleOverrides(componentName, theme);

          if (styleOverrides) {
            return overridesResolver(props, styleOverrides);
          }

          return null;
        });
      }

      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push(function (props) {
          var theme = isEmpty(props.theme) ? defaultTheme : props.theme;
          return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
        });
      }

      if (!skipSx) {
        expressionsWithDefaultTheme.push(function (props) {
          var theme = isEmpty(props.theme) ? defaultTheme : props.theme;
          return styleFunctionSx(_extends({}, props, {
            theme: theme
          }));
        });
      }

      var numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;

      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        var placeholders = new Array(numOfCustomFnsApplied).fill(''); // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.

        transformedStyleArg = [].concat(_toConsumableArray(styleArg), _toConsumableArray(placeholders));
        transformedStyleArg.raw = [].concat(_toConsumableArray(styleArg.raw), _toConsumableArray(placeholders));
      } else if (typeof styleArg === 'function') {
        // If the type is function, we need to define the default theme.
        transformedStyleArg = function transformedStyleArg(_ref2) {
          var themeInput = _ref2.theme,
              other = _objectWithoutProperties(_ref2, ["theme"]);

          return styleArg(_extends({
            theme: isEmpty(themeInput) ? defaultTheme : themeInput
          }, other));
        };
      }

      var Component = defaultStyledResolver.apply(void 0, [transformedStyleArg].concat(_toConsumableArray(expressionsWithDefaultTheme)));

      if (process.env.NODE_ENV !== 'production') {
        var displayName;

        if (componentName) {
          displayName = "".concat(componentName).concat(componentSlot || '');
        }

        if (displayName === undefined) {
          displayName = "Styled(".concat(getDisplayName(tag), ")");
        }

        Component.displayName = displayName;
      }

      return Component;
    };

    return muiStyledResolver;
  };
}