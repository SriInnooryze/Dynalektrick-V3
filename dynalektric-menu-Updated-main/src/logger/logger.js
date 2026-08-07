/**
 * logger/logger.js — Environment-aware logger abstraction
 */

const IS_PROD = typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'production';

export const logger = {
  info(...args) {
    if (!IS_PROD) console.log('[INFO]', ...args);
  },
  warn(...args) {
    console.warn('[WARN]', ...args);
  },
  error(...args) {
    console.error('[ERROR]', ...args);
  },
};
