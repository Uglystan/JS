urls = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2', 'https://jsonplaceholder.typicode.com/posts/3']

async function fetchData(urls) {
	try {
		for(const url of urls) {
			let response = await fetch(url)
			let data = await response.json()
			console.log(data)
		}
	}
	catch(error){
		console.log("Error")
	}
}

fetchData(urls)