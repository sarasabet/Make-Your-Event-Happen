import * as React from 'react';
import { UseSwitchProps } from './useSwitch';
export interface SwitchUnstyledProps extends UseSwitchProps {
    /**
     * Class name applied to the root element.
     */
    className?: string;
    /**
     * The component used for the Root slot.
     * Either a string to use a HTML element or a component.
     * This is equivalent to `components.Root`. If both are provided, the `component` is used.
     */
    component?: React.ElementType;
    /**
     * The components used for each slot inside the Switch.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components?: {
        Root?: React.ElementType;
        Thumb?: React.ElementType;
        Input?: React.ElementType;
        Track?: React.ElementType | null;
    };
    /**
     * The props used for each slot inside the Switch.
     * @default {}
     */
    componentsProps?: {
        root?: {};
        thumb?: {};
        input?: {};
        track?: {};
    };
}
/**
 * The foundation for building custom-styled switches.
 *
 * Demos:
 *
 * - [Switches](https://material-ui.com/components/switches/)
 *
 * API:
 *
 * - [SwitchUnstyled API](https://material-ui.com/api/switch-unstyled/)
 */
declare const SwitchUnstyled: React.ForwardRefExoticComponent<SwitchUnstyledProps & React.RefAttributes<any>>;
export default SwitchUnstyled;
