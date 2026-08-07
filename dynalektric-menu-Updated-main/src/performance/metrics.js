/**
 * performance/metrics.js — Core Web Vitals & performance tracking
 */

export function reportWebVitals() {
  if (typeof window !== 'undefined' && window.performance) {
    const timing = window.performance.timing;
    const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
    console.log('[Performance] Page load time (ms):', pageLoadTime);
  }
}
