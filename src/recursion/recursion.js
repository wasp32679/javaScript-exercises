import { error } from 'console'

/**
 * Calculate the factorial of a number using recursion
 * Factorial of n (n!) is the product of all positive integers less than or equal to n
 * For example: 5! = 5 × 4 × 3 × 2 × 1 = 120
 * @param {number} n - A non-negative integer
 * @return {number} The factorial of n
 */
export function factorial(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new Error('wrong format')
  }
  if (n === 0 || n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}

/**
 * Calculate the nth Fibonacci number using recursion
 * Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * Each number is the sum of the two preceding numbers
 * @param {number} n - A non-negative integer representing the position in the sequence
 * @return {number} The nth Fibonacci number
 */
export function fibonacci(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new Error('wrong format')
  }
  if (n === 0) {
    return 0
  }
  if (n === 1 || n === 2) {
    return 1
  }
  return fibonacci(n - 2) + fibonacci(n - 1)
}
