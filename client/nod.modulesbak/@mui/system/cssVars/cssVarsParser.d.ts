declare type NestedRecord<V = any> = {
    [k: string | number]: NestedRecord<V> | V;
};
/**
 * This function create an object from keys, value and then assign to target
 *
 * @param {Object} obj : the target object to be assigned
 * @param {string[]} keys
 * @param {string | number} value
 *
 * @example
 * const source = {}
 * assignNestedKeys(source, ['palette', 'primary'], 'var(--palette-primary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)' } }
 *
 * @example
 * const source = { palette: { primary: 'var(--palette-primary)' } }
 * assignNestedKeys(source, ['palette', 'secondary'], 'var(--palette-secondary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)', secondary: 'var(--palette-secondary)' } }
 */
export declare const assignNestedKeys: <Object_1 = NestedRecord<any>, Value = any>(obj: Object_1, keys: Array<string>, value: Value) => void;
/**
 *
 * @param {Object} obj : source object
 * @param {Function} callback : a function that will be called when
 *                   - the deepest key in source object is reached
 *                   - the value of the deepest key is NOT `undefined` | `null`
 *
 * @example
 * walkObjectDeep({ palette: { primary: { main: '#000000' } } }, console.log)
 * // ['palette', 'primary', 'main'] '#000000'
 */
export declare const walkObjectDeep: <Value, T = Record<string, any>>(obj: T, callback: (keys: Array<string>, value: Value) => void) => void;
/**
 * a function that parse theme and return { css, vars }
 *
 * @param {Object} theme
 * @param {{ prefix?: string }} options
 * @returns {{ css: Object, vars: Object }} `css` is the stylesheet, `vars` is an object to get css variable (same structure as theme)
 *
 * @example
 * const { css, vars } = parser({
 *   fontSize: 12,
 *   lineHeight: 1.2,
 *   palette: { primary: { 500: '#000000' } }
 * })
 *
 * console.log(css) // { '--fontSize': '12px', '--lineHeight': 1.2, '--palette-primary-500': '#000000' }
 * console.log(vars) // { fontSize: '--fontSize', lineHeight: '--lineHeight', palette: { primary: { 500: 'var(--palette-primary-500)' } } }
 */
export default function cssVarsParser(obj: Record<string, any>, options?: {
    prefix?: string;
}): {
    css: NestedRecord<string>;
    vars: NestedRecord<string>;
};
export {};
