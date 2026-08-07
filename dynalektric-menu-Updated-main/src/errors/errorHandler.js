/**
 * errors/errorHandler.js — Global unhandled exception listener
 */

export function initErrorHandler() {
  if (typeof window === 'undefined') return;
  window.addEventListener('error', (event) => {
    console.error('[GlobalErrorHandler]', event.message, event.filename, event.lineno);
  });
}
