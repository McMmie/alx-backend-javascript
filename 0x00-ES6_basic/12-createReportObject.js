export default function createReportObject(employeesList) {i
	return {
		allEmployees: employeesList,
		getNumberOfDepartments(employeesList) {
			return Object.keys(employeesList).length
		},
	};

}
