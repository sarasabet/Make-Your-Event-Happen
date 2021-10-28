import { generateUtilityClass, generateUtilityClasses } from '@material-ui/unstyled';
export function getSkeletonUtilityClass(slot) {
  return generateUtilityClass('MuiSkeleton', slot);
}
var skeletonClasses = generateUtilityClasses('MuiSkeleton', ['root', 'text', 'rectangular', 'circular', 'pulse', 'wave', 'withChildren', 'fitContent', 'heightAuto']);
export default skeletonClasses;