import { generateUtilityClass, generateUtilityClasses } from '@mui/core';
export function getTimelineDotUtilityClass(slot) {
  return generateUtilityClass('MuiTimelineDot', slot);
}
var timelineDotClasses = generateUtilityClasses('MuiTimelineDot', ['root', 'filled', 'outlined', 'filledGrey', 'outlinedGrey', 'filledPrimary', 'outlinedPrimary', 'filledSecondary', 'outlinedSecondary']);
export default timelineDotClasses;