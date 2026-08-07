/**
 * adapters/forms/index.js — Contact & RFQ form submission adapter
 */

export function submitFormAdapter(formData) {
  return new Promise((resolve) => {
    console.log('[FormAdapter] Submitting form data:', formData);
    setTimeout(() => {
      resolve({ success: true, message: 'RFQ submitted successfully.' });
    }, 500);
  });
}
