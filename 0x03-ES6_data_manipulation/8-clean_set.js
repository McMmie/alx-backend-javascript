export default function cleanSet(set, startString) {
	const values = [];
	if (startString === '') {
		return startString;
	} else {
		set.forEach(value => {
			if (value.startsWith(startString)) {
				values.push(value.substring(startString.length));
			}
		});
	}
	return values.join('-');
}
