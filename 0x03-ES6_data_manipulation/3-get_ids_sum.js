export default function getStudentIdsSum(array) {
	const sum = array.reduce((acc, value) => acc + value.id, 0);
	return sum;
}
