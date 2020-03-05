/**
 * Simple promise wait.
 *
 * @param time [number]
 */

const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));

export default sleep;
