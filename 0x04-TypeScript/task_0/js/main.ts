interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const stud1: Student = {
	firstName: 'Jackie',
	lastName: 'Chan',
	age: 26,
	location: 'China',
};
const stud2: Student = {
	firstName: 'Bruce',
	lastName: 'Lee',
	age: 23,
	location: 'China',
};
const studentsList = [stud1, stud2];

function renderStudentTable(students: Student[]) {
	var tbody = document.querySelector('#studentTable tbody');
	tbody.innerHTML = ''; // Clear existing rows

	students.forEach(function(student) {
		var row = document.createElement('tr');
		row.innerHTML = '<td>' + student.firstName + '</td><td>' + student.location + '</td>';
		tbody.appendChild(row);
	});
}

renderStudentTable(studentsList);
