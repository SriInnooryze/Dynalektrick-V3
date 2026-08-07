/**
 * services/contactService.js — Contact & RFQ inquiry service
 */

import { submitFormAdapter } from '../adapters/forms/index.js';

export async function submitInquiry(inquiryData) {
  return await submitFormAdapter(inquiryData);
}
