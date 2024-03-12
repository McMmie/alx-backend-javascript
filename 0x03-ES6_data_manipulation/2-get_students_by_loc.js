
export default function getStudentsByLocation(list, city) {

	if (Array.isArray(list) && typeof(city) === 'string') {
		const arr = list.filter(word => word.location === city);
		return arr;
	}
	else {
		const error = "something went wrong!";
		return error;
	}
}
