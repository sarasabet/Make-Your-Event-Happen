import { generateUtilityClass, generateUtilityClasses } from '@material-ui/unstyled';
export function getTimelineUtilityClass(slot) {
  return generateUtilityClass('MuiTimeline', slot);
}
const timelineClasses = generateUtilityClasses('MuiTimeline', ['root', 'positionLeft', 'positionRight', 'positionAlternate']);
export default timelineClasses;