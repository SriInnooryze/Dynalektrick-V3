/**
 * Unit tests for Services Layer
 */
const { ContactService, ExportService } = require('../../src/services/index.js');

describe('Services Layer', () => {
  test('ContactService should validate input parameters', () => {
    const invalid = ContactService.validatePayload({ name: '' });
    expect(invalid.isValid).toBe(false);
    expect(invalid.errors.name).toBeDefined();
  });
});
