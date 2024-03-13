export default function hasValuesFromArray(set, array) {
	var checker = 0;
	for (let i = 0; i < array.length; i++) {
		for (const j of set) {
			if (array[i] === j) {
				checker++;
			}
		}
	}
	if (checker !== array.length - 1) {
		return true;
	} else {
		return false;
	}
}
