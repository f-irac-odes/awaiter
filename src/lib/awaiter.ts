/**
 * Waits for a value to be instantiated (i.e., not `undefined` or `null`).
 * The function repeatedly checks the value at a specified interval and resolves the promise
 * once the value is instantiated or rejects if an error occurs within the instantiator function.
 *
 * @template T - The type of the value that is being waited for.
 * @param {() => T | undefined | null} instantiator - A function that returns the value to wait for.
 * @param {number} [checkInterval=100] - The interval in milliseconds to check the value. Default is 100ms.
 * @param {number} [timeout=5000] - The maximum time in milliseconds to wait for the value before timing out. Default is 5000ms.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the value is instantiated, 
 * or `false` if the timeout occurs without the value being instantiated. The promise is rejected if an error occurs.
 *
 * @throws {Error} If the instantiator function throws an error, the promise is rejected with that error.
 *
 * @example
 * ```typescript
 * let someValue: string | undefined;
 *
 * setTimeout(() => {
 *   someValue = "Hello, TypeScript!";
 * }, 2000);
 *
 * waitForValue<string>(() => someValue, 100, 5000)
 *   .then((result) => {
 *     if (result) {
 *       console.log("Value has been instantiated:", someValue);
 *     } else {
 *       console.log("Timeout: Value was not instantiated in time.");
 *     }
 *   })
 *   .catch((error) => {
 *     console.error("An error occurred:", error);
 *   });
 * ```
 */
export function waitForValue<T>(
    instantiator: () => T | undefined | null,
    checkInterval: number = 100,
    timeout: number = 5000
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
  
      const intervalId = setInterval(() => {
        try {
          const value = instantiator();
          if (value !== undefined && value !== null) {
            clearInterval(intervalId);
            resolve(true);
          } else if (Date.now() - startTime > timeout) {
            clearInterval(intervalId);
            resolve(false); // Timeout occurred without value being instantiated
          }
        } catch (error) {
          clearInterval(intervalId);
          reject(error); // Reject the promise if an error occurs
        }
      }, checkInterval);
    });
  }
  