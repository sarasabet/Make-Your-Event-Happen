import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { elementTypeAcceptingRef } from '@material-ui/utils';
import Collapse from '@material-ui/core/Collapse';
import { alpha, styled, useThemeProps } from '@material-ui/core/styles';
import { ownerDocument, useForkRef, unsupportedProp } from '@material-ui/core/utils';
import { unstable_composeClasses as composeClasses } from '@material-ui/unstyled';
import TreeViewContext from '../TreeView/TreeViewContext';
import { DescendantProvider, useDescendant } from '../TreeView/descendants';
import TreeItemContent from './TreeItemContent';
import treeItemClasses, { getTreeItemUtilityClass } from './treeItemClasses';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes;
  var slots = {
    root: ['root'],
    content: ['content'],
    expanded: ['expanded'],
    selected: ['selected'],
    focused: ['focused'],
    disabled: ['disabled'],
    iconContainer: ['iconContainer'],
    label: ['label'],
    group: ['group']
  };
  return composeClasses(slots, getTreeItemUtilityClass, classes);
};

var TreeItemRoot = styled('li', {
  name: 'MuiTreeItem',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.root;
  }
})({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  outline: 0
});
var StyledTreeItemContent = styled(TreeItemContent, {
  name: 'MuiTreeItem',
  slot: 'Content',
  overridesResolver: function overridesResolver(props, styles) {
    return [styles.content, styles.iconContainer && _defineProperty({}, "& .".concat(treeItemClasses.iconContainer), styles.iconContainer), styles.label && _defineProperty({}, "& .".concat(treeItemClasses.label), styles.label)];
  }
})(function (_ref3) {
  var _ref4;

  var theme = _ref3.theme;
  return _ref4 = {
    padding: '0 8px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  }, _defineProperty(_ref4, "&.".concat(treeItemClasses.disabled), {
    opacity: theme.palette.action.disabledOpacity,
    backgroundColor: 'transparent'
  }), _defineProperty(_ref4, "&.".concat(treeItemClasses.focused), {
    backgroundColor: theme.palette.action.focus
  }), _defineProperty(_ref4, "&.".concat(treeItemClasses.selected), _defineProperty({
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    }
  }, "&.".concat(treeItemClasses.focused), {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
  })), _defineProperty(_ref4, "& .".concat(treeItemClasses.iconContainer), {
    marginRight: 4,
    width: 15,
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'center',
    '& svg': {
      fontSize: 18
    }
  }), _defineProperty(_ref4, "& .".concat(treeItemClasses.label), _extends({
    width: '100%',
    // fixes overflow - see https://github.com/mui-org/material-ui/issues/27372
    minWidth: 0,
    paddingLeft: 4,
    position: 'relative'
  }, theme.typography.body1)), _ref4;
});
var TreeItemGroup = styled(Collapse, {
  name: 'MuiTreeItem',
  slot: 'Group',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.group;
  }
})({
  margin: 0,
  padding: 0,
  marginLeft: 17
});
var TreeItem = /*#__PURE__*/React.forwardRef(function TreeItem(inProps, ref) {
  var props = useThemeProps({
    props: inProps,
    name: 'MuiTreeItem'
  });

  var children = props.children,
      className = props.className,
      collapseIcon = props.collapseIcon,
      _props$ContentCompone = props.ContentComponent,
      ContentComponent = _props$ContentCompone === void 0 ? TreeItemContent : _props$ContentCompone,
      ContentProps = props.ContentProps,
      endIcon = props.endIcon,
      expandIcon = props.expandIcon,
      disabledProp = props.disabled,
      icon = props.icon,
      idProp = props.id,
      label = props.label,
      nodeId = props.nodeId,
      onClick = props.onClick,
      onMouseDown = props.onMouseDown,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Collapse : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = _objectWithoutProperties(props, ["children", "className", "collapseIcon", "ContentComponent", "ContentProps", "endIcon", "expandIcon", "disabled", "icon", "id", "label", "nodeId", "onClick", "onMouseDown", "TransitionComponent", "TransitionProps"]);

  var _React$useContext = React.useContext(TreeViewContext),
      _React$useContext$ico = _React$useContext.icons,
      contextIcons = _React$useContext$ico === void 0 ? {} : _React$useContext$ico,
      focus = _React$useContext.focus,
      isExpanded = _React$useContext.isExpanded,
      isFocused = _React$useContext.isFocused,
      isSelected = _React$useContext.isSelected,
      isDisabled = _React$useContext.isDisabled,
      multiSelect = _React$useContext.multiSelect,
      disabledItemsFocusable = _React$useContext.disabledItemsFocusable,
      mapFirstChar = _React$useContext.mapFirstChar,
      unMapFirstChar = _React$useContext.unMapFirstChar,
      registerNode = _React$useContext.registerNode,
      unregisterNode = _React$useContext.unregisterNode,
      treeId = _React$useContext.treeId;

  var id = null;

  if (idProp != null) {
    id = idProp;
  } else if (treeId && nodeId) {
    id = "".concat(treeId, "-").concat(nodeId);
  }

  var _React$useState = React.useState(null),
      treeitemElement = _React$useState[0],
      setTreeitemElement = _React$useState[1];

  var contentRef = React.useRef(null);
  var handleRef = useForkRef(setTreeitemElement, ref);
  var descendant = React.useMemo(function () {
    return {
      element: treeitemElement,
      id: nodeId
    };
  }, [nodeId, treeitemElement]);

  var _useDescendant = useDescendant(descendant),
      index = _useDescendant.index,
      parentId = _useDescendant.parentId;

  var expandable = Boolean(Array.isArray(children) ? children.length : children);
  var expanded = isExpanded ? isExpanded(nodeId) : false;
  var focused = isFocused ? isFocused(nodeId) : false;
  var selected = isSelected ? isSelected(nodeId) : false;
  var disabled = isDisabled ? isDisabled(nodeId) : false;

  var ownerState = _extends({}, props, {
    expanded: expanded,
    focused: focused,
    selected: selected,
    disabled: disabled
  });

  var classes = useUtilityClasses(ownerState);
  var displayIcon;
  var expansionIcon;

  if (expandable) {
    if (!expanded) {
      expansionIcon = expandIcon || contextIcons.defaultExpandIcon;
    } else {
      expansionIcon = collapseIcon || contextIcons.defaultCollapseIcon;
    }
  }

  if (expandable) {
    displayIcon = contextIcons.defaultParentIcon;
  } else {
    displayIcon = endIcon || contextIcons.defaultEndIcon;
  }

  React.useEffect(function () {
    // On the first render a node's index will be -1. We want to wait for the real index.
    if (registerNode && unregisterNode && index !== -1) {
      registerNode({
        id: nodeId,
        idAttribute: id,
        index: index,
        parentId: parentId,
        expandable: expandable,
        disabled: disabledProp
      });
      return function () {
        unregisterNode(nodeId);
      };
    }

    return undefined;
  }, [registerNode, unregisterNode, parentId, index, nodeId, expandable, disabledProp, id]);
  React.useEffect(function () {
    if (mapFirstChar && unMapFirstChar && label) {
      mapFirstChar(nodeId, contentRef.current.textContent.substring(0, 1).toLowerCase());
      return function () {
        unMapFirstChar(nodeId);
      };
    }

    return undefined;
  }, [mapFirstChar, unMapFirstChar, nodeId, label]);
  var ariaSelected;

  if (multiSelect) {
    ariaSelected = selected;
  } else if (selected) {
    /* single-selection trees unset aria-selected on un-selected items.
     *
     * If the tree does not support multiple selection, aria-selected
     * is set to true for the selected node and it is not present on any other node in the tree.
     * Source: https://www.w3.org/TR/wai-aria-practices/#TreeView
     */
    ariaSelected = true;
  }

  function handleFocus(event) {
    // DOM focus stays on the tree which manages focus with aria-activedescendant
    if (event.target === event.currentTarget) {
      ownerDocument(event.target).getElementById(treeId).focus({
        preventScroll: true
      });
    }

    var unfocusable = !disabledItemsFocusable && disabled;

    if (!focused && event.currentTarget === event.target && !unfocusable) {
      focus(event, nodeId);
    }
  }

  return /*#__PURE__*/_jsxs(TreeItemRoot, _extends({
    className: clsx(classes.root, className),
    role: "treeitem",
    "aria-expanded": expandable ? expanded : null,
    "aria-selected": ariaSelected,
    "aria-disabled": disabled || null,
    ref: handleRef,
    id: id,
    tabIndex: -1
  }, other, {
    ownerState: ownerState,
    onFocus: handleFocus,
    children: [/*#__PURE__*/_jsx(StyledTreeItemContent, _extends({
      as: ContentComponent,
      ref: contentRef,
      classes: {
        root: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        focused: classes.focused,
        disabled: classes.disabled,
        iconContainer: classes.iconContainer,
        label: classes.label
      },
      label: label,
      nodeId: nodeId,
      onClick: onClick,
      onMouseDown: onMouseDown,
      icon: icon,
      expansionIcon: expansionIcon,
      displayIcon: displayIcon,
      ownerState: ownerState
    }, ContentProps)), children && /*#__PURE__*/_jsx(DescendantProvider, {
      id: nodeId,
      children: /*#__PURE__*/_jsx(TreeItemGroup, _extends({
        as: TransitionComponent,
        unmountOnExit: true,
        className: classes.group,
        in: expanded,
        component: "ul",
        role: "group"
      }, TransitionProps, {
        children: children
      }))
    })]
  }));
});
process.env.NODE_ENV !== "production" ? TreeItem.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The icon used to collapse the node.
   */
  collapseIcon: PropTypes.node,

  /**
   * The component used for the content node.
   * @default TreeItemContent
   */
  ContentComponent: elementTypeAcceptingRef,

  /**
   * Props applied to ContentComponent
   */
  ContentProps: PropTypes.object,

  /**
   * If `true`, the node is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The icon displayed next to a end node.
   */
  endIcon: PropTypes.node,

  /**
   * The icon used to expand the node.
   */
  expandIcon: PropTypes.node,

  /**
   * The icon to display next to the tree node's label.
   */
  icon: PropTypes.node,

  /**
   * @ignore
   */
  id: PropTypes.string,

  /**
   * The tree node label.
   */
  label: PropTypes.node,

  /**
   * The id of the node.
   */
  nodeId: PropTypes.string.isRequired,

  /**
   * @ignore
   */
  onClick: PropTypes.func,

  /**
   * This prop isn't supported.
   * Use the `onNodeFocus` callback on the tree if you need to monitor a node's focus.
   */
  onFocus: unsupportedProp,

  /**
   * @ignore
   */
  onMouseDown: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Collapse
   */
  TransitionComponent: PropTypes.elementType,

  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition) component.
   */
  TransitionProps: PropTypes.object
} : void 0;
export default TreeItem;