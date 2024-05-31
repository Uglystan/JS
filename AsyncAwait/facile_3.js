urls = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2', 'https://jsonplaceholder.typicode.com/posts/3']

async function fetchData(urls) {
	const datas = []
	try {
		//Promise.all pour faire simultanement le request ca prend un tableau de response (fetch(url))
		//Sur un tableau on peut utiliser la fonction map qui cree
		//un nouveau tableau en appliquant une fonction sur chaque element du tableau
		//Donc la sur url on applique la fonction fleche fetch(url) ca nous creer donc
		//Un nouveau tableau de response. C'est comme mapi en C
		const reps = await Promise.all(urls.map(url => fetch(url)))
		for (const rep of reps) {
			datas.push(await rep.json())
			console.log(datas[datas.length - 1])
		}
	}
	catch (error) {
		console.log("Error")
	}
}

fetchData(urls)