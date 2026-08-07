/**
 * utils/helpers.js — General helper utilities
 */

export function truncateText(str, maxLength = 100) {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}
