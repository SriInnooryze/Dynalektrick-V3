/**
 * lib/browser/index.js — Browser feature detection and capability helpers
 */

export function supportsIntersectionObserver() {
  return typeof window !== 'undefined' && 'IntersectionObserver' in window;
}

export function supportsWebP() {
  if (typeof document === 'undefined') return false;
  const elem = document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}
