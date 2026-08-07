/**
 * lib/dom/index.js — Framework-agnostic DOM utilities
 */

export function query(selector, context = document) {
  return context.querySelector(selector);
}

export function queryAll(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

export function addClass(el, className) {
  if (el) el.classList.add(className);
}

export function removeClass(el, className) {
  if (el) el.classList.remove(className);
}
