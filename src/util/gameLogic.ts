/**
 * Generates a random time within the millisecond interval [start, start + duration]
 *
 * @param duration The maximum length of the random interval (in ms)
 * @param start The amount of time to wait before the interval starts (in ms)
 * @returns A random time (in ms)
 */
export const generateRandomTime = (duration: number, start = 100): number =>
  Math.round(Math.random() * duration) + start

/**
 * Returns a normalized difference between the given guess and expected time
 * (both in ms)
 *
 * @param guess The guess to score
 * @param expectedTime The expected time for the guess
 * @returns A normalized difference of the guess and expected time
 */
export const getNormalizedDifference = (guess: number, expectedTime: number): number =>
  Math.abs(guess - expectedTime) / expectedTime
