export default function createIteratorObject(report) {
	return (function* _() {
		for (const dept of Object.values(report.allEmp)) {
			for (const emp of dept) {
				yield emp;
			}
		}
	}());
}
