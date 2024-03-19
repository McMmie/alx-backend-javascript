export default function iterateThroughObject(reportWithIterator) {
	const emp = [];
	for (const i of reportWithIterator) {
		emp.push(i);
	}

	return emp.join(' | ');

}
