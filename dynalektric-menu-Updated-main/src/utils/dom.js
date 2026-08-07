/**
 * utils/dom.js — DOM helper utilities
 */

export function setElementStyle(element, property, value) {
  if (element && element.style) {
    element.style.setProperty(property, value);
  }
}
