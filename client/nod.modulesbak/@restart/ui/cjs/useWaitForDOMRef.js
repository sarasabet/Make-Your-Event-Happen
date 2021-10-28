"use strict";

exports.__esModule = true;
exports.default = useWaitForDOMRef;
exports.resolveContainerRef = void 0;

var _ownerDocument = _interopRequireDefault(require("dom-helpers/ownerDocument"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resolveContainerRef = ref => {
  var _ref;

  if (typeof document === 'undefined') return null;
  if (ref == null) return (0, _ownerDocument.default)().body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType) return ref || null;
  return null;
};

exports.resolveContainerRef = resolveContainerRef;

function useWaitForDOMRef(ref, onResolved) {
  const [resolvedRef, setRef] = (0, _react.useState)(() => resolveContainerRef(ref));

  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  (0, _react.useEffect)(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  (0, _react.useEffect)(() => {
    const nextRef = resolveContainerRef(ref);

    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}