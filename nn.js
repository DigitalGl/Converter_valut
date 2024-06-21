const { log } = require("console");


myPromise.then(function (data) {

	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			console.log('Then 1');
			console.log(data);

			const response = false;
			if (response) {
				resolve('Data from then 1')
			} else {
				reject('Data from then 1')
			}
		}, 1000)
	})
}).then(function (data) {

	setTimeout(() => {
		console.log('Then 2');
		console.log(data);
	})

}).catch(function (data) {
	console.log('Catch');
	console.log(data);
})

if (a === b) {
	console.log();
}



