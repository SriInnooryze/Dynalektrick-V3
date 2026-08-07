/**
 * services/exportService.js — Export dataset service
 */

export function getExportCapabilities() {
  return {
    destinations: ['Europe', 'Middle East', 'Asia'],
    standards: ['IEC 60076', 'IEC 61439', 'IS 2026'],
  };
}
