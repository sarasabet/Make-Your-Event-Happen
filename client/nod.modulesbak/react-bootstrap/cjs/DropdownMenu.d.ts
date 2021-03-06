import * as React from 'react';
import { UseDropdownMenuOptions } from '@restart/ui/DropdownMenu';
import { SelectCallback } from '@restart/ui/types';
import { DropDirection } from './DropdownContext';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
import { AlignType } from './types';
export declare type DropdownMenuVariant = 'dark' | string;
export interface DropdownMenuProps extends BsPrefixProps, Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
    show?: boolean;
    renderOnMount?: boolean;
    flip?: boolean;
    align?: AlignType;
    onSelect?: SelectCallback;
    rootCloseEvent?: 'click' | 'mousedown';
    popperConfig?: UseDropdownMenuOptions['popperConfig'];
    variant?: DropdownMenuVariant;
}
export declare function getDropdownMenuPlacement(alignEnd: boolean, dropDirection?: DropDirection, isRTL?: boolean): "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
declare const DropdownMenu: BsPrefixRefForwardingComponent<'div', DropdownMenuProps>;
export default DropdownMenu;
