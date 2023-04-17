import fs from 'node:fs/promises';
import { setTimeout } from 'node:timers/promises';

/**
 * @param {string} name
 */
export const createParser = (name) => {
	const fileName = `./${name}.json`;
	/**
	 * @type {(func: Function) => Function}
	 */
	return (func) => {
		return async (force) => {
			try {
				if (force) {
					throw new Error();
				}
				await fs.access();
			} catch (error) {
				const result = await func(fileName);

				await fs.writeFile(fileName, JSON.stringify(result));
			}
		};
	};
};


export const sleep = (time) => {
  return setTimeout(time)
}
