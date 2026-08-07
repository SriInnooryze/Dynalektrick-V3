/**
 * services/api.js — Generic API request service
 */

export async function request(endpoint, options = {}) {
  const response = await fetch(endpoint, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
}
