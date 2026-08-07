/**
 * useTweaks.js — Custom hook for managing live theme tweaks
 */

export function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);

  const set = React.useCallback((key, val) => {
    setValues(prev => ({ ...prev, [key]: val }));
  }, []);

  return { values, set };
}
