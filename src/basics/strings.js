/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  if (typeof needle || haystack !== 'string' || needle || haystack === '') {
    throw new Error('wrong format')
  }
  for (let i = 0; i < needle.length; i++)
    haystack.replace(needle[i], newWord[i])
}
