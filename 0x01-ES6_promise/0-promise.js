function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		resolve("true");
	});
}

getResponseFromAPI().then((result) => {
	console.log(result);
});
