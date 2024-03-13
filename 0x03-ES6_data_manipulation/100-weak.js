export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
	const { protocol, name } = endpoint;
	const key = {protocol, name};

	if (!weakMap.has(key)) {
		weakMap.set(key, 1);
	} else {
		const count = weakMap.get(key);
		weakMap.set(key, count + 1);
		// Check if the number of queries is >= 5
		if (count + 1 >= 5) {
			throw new Error(`Endpoint load is high`);
		}
	}
}

