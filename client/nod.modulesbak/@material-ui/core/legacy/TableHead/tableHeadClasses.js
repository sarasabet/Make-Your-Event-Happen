import { generateUtilityClass, generateUtilityClasses } from '@material-ui/unstyled';
export function getTableHeadUtilityClass(slot) {
  return generateUtilityClass('MuiTableHead', slot);
}
var tableHeadClasses = generateUtilityClasses('MuiTableHead', ['root']);
export default tableHeadClasses;