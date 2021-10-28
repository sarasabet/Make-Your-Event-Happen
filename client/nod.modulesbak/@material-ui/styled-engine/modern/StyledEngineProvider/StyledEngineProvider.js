import * as React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache'; // Cache with option to prepend emotion's style tag

import { jsx as _jsx } from "react/jsx-runtime";
const cache = createCache({
  key: 'css',
  prepend: true
});
export default function StyledEngineProvider(props) {
  const {
    injectFirst,
    children
  } = props;
  return injectFirst ? /*#__PURE__*/_jsx(CacheProvider, {
    value: cache,
    children: children
  }) : children;
}
process.env.NODE_ENV !== "production" ? StyledEngineProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node,

  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override Material-UI's styles, set this prop.
   */
  injectFirst: PropTypes.bool
} : void 0;