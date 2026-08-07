/**
 * adapters/images/index.js — Image path resolution & fallback adapter
 */

export function getResourcePath(resourceId, fallbackPath) {
  if (typeof window !== 'undefined' && window.__resources && window.__resources[resourceId]) {
    return window.__resources[resourceId];
  }
  return fallbackPath;
}
