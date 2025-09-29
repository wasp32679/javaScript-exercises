/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  if (
    typeof needle !== 'string' ||
    typeof haystack !== 'string' ||
    typeof newWord !== 'string'
  ) {
    throw new Error('wrong format')
  }
  const regex = new RegExp(needle, 'gi')

  return haystack.replace(regex, (match) => {
    let result = ''
    for (let i = 0; i < needle.length; i++) {
      const newWordLetter = newWord[i]
      const matchLetter = match[i]

      if (!newWordLetter) {
        break
      }
      if (matchLetter === matchLetter.toUpperCase()) {
        result += newWordLetter.toUpperCase()
      } else {
        result += newWordLetter.toLowerCase()
      }
    }
    return result
  })
}
