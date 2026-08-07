/**
 * Unit tests for Data Catalogs
 */
const { PRODUCTS, INDUSTRIES, CERTIFICATIONS } = require('../../src/data/index.js');

describe('Data Catalog Integrity', () => {
  test('PRODUCTS catalog should contain non-empty subcategories', () => {
    expect(Array.isArray(PRODUCTS)).toBe(true);
    expect(PRODUCTS.length).toBeGreaterThan(0);
  });

  test('INDUSTRIES catalog should contain 6 sectors', () => {
    expect(Array.isArray(INDUSTRIES)).toBe(true);
    expect(INDUSTRIES.length).toBe(6);
  });

  test('CERTIFICATIONS catalog should contain valid certifications', () => {
    expect(Array.isArray(CERTIFICATIONS)).toBe(true);
    expect(CERTIFICATIONS.length).toBeGreaterThan(0);
  });
});
