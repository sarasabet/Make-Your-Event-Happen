import { generateUtilityClass, generateUtilityClasses } from '@material-ui/unstyled';
export function getToggleButtonUtilityClass(slot) {
  return generateUtilityClass('MuiToggleButton', slot);
}
var toggleButtonClasses = generateUtilityClasses('MuiToggleButton', ['root', 'disabled', 'selected', 'standard', 'primary', 'secondary', 'sizeSmall', 'sizeMedium', 'sizeLarge']);
export default toggleButtonClasses;