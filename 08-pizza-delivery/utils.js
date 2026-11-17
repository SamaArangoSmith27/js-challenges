// We will use this "promisified" setTimeout to limit the use of callbacks
export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));