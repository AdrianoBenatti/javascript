
/*
 AJAX
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://api.github.com/users/diego3g');
	xhr.send(null);

	xhr.onreadystatechange = function () {
		if(xhr.readyState == 4){
			console.log(JSON.parse(xhr.responseText));
		}
	}
*/

/*PROMISSE
var minhaPromisse = function () {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://api.github.com/users/diego3g');
		xhr.send(null);

		xhr.onreadystatechange = function () {
			if(xhr.readyState === 4){
				if(xhr.status === 200){
				resolve(JSON.parse(xhr.responseText));
				}else{
					reject('Erro na requisição');
				}
			}
		}

	});
}*/

axios.get('https://api.github.com/users/diego3g')
	.then(function (response) {
		console.log(response.data.avatar);
	})
	.catch(function (error) {
		console.warn(error);
	});