/**
 * performance/preload.js — Preload critical assets helper
 */

export function preloadImage(src) {
  if (typeof document === 'undefined') return;
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
}
