/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
  if (typeof diameter === 'string' || diameter < 0 || Number.isNaN(diameter)) {
    throw new Error('wrong format')
  }
  const r = diameter / 2
  return (4 / 3) * Math.PI * Math.pow(r, 3)
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
  if (typeof n === 'string' || Number.isNaN(n)) {
    throw new Error('wrong format')
  }
  return Math.round(n * 10) / 10
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
  if (
    !Array.isArray(grades) ||
    grades.some((item) => typeof item !== 'number' || Number.isNaN(item))
  ) {
    throw new Error('wrong format')
  }
  let sum = 0
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i]
  }
  return sum / grades.length
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
  if (
    !Array.isArray(grades) ||
    grades.some((item) => typeof item !== 'number' || Number.isNaN(item))
  ) {
    throw new Error('wrong format')
  }
  let sum = 0
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i]
  }
  return Math.round((sum / grades.length) * 10) / 10
}
