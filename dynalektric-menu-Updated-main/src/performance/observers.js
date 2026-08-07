/**
 * performance/observers.js — Centralized IntersectionObserver factory
 */

export function createObserver(callback, options = {}) {
  const defaultOptions = { threshold: 0.1, rootMargin: '0px' };
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    return new IntersectionObserver(callback, { ...defaultOptions, ...options });
  }
  return null;
}
