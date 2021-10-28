"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getRect = function getRect(element) {
  return element.getBoundingClientRect();
};

var detectElementOverflow = function detectElementOverflow(element, container) {
  return {
    get collidedTop() {
      return getRect(element).top < getRect(container).top;
    },

    get collidedBottom() {
      return getRect(element).bottom > getRect(container).bottom;
    },

    get collidedLeft() {
      return getRect(element).left < getRect(container).left;
    },

    get collidedRight() {
      return getRect(element).right > getRect(container).right;
    },

    get overflowTop() {
      return getRect(container).top - getRect(element).top;
    },

    get overflowBottom() {
      return getRect(element).bottom - getRect(container).bottom;
    },

    get overflowLeft() {
      return getRect(container).left - getRect(element).left;
    },

    get overflowRight() {
      return getRect(element).right - getRect(container).right;
    }

  };
};

var _default = detectElementOverflow;
exports["default"] = _default;