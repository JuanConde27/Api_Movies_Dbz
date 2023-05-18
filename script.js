const container = document.getElementById('container');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '781f896fe2mshbb0ef6548d62a7ap19c78fjsn83fd66d7f888',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=dragon%20ball', options)
	.then(response => response.json())
	.then(data => {
        console.log(data);
        const arrayMovies = data.d;
        arrayMovies.map( (Element) => {
            const title = Element.l;
            const year = Element.y;
            const img = Element.i.imageUrl;
            const cast = Element.s;
            const q = Element.q;
            const html = `
            <div class="card">
                <img src="${img}" alt="${title}">
                <div class="card-body">
                    <h2>${title}</h2>
                    <br>
                    <p>Año: ${year}</p>
                    <p>Personajes: ${cast}</p>
                    <p>Productora: ${q}</p>
                </div>
            </div>
            `;
            container.innerHTML += html;
        })
    })
	.catch(err => console.error(err));

//cuando el usuario le click a la pelicula se debe redirigir a google

container.addEventListener('click', (e) => {
    const title = e.target.parentNode.querySelector('h2').textContent;
    if (title === 'Dragon Ball Super: Super Hero') {
        window.open(`https://www8.cuevana3.ch/17607/${title.toLowerCase().replace(/ /g, '-').replace(/:/g, '')}`);
    }
    else if (title === 'Dragon Ball Super: Broly') {
        window.open(`https://www8.cuevana3.ch/17607/${title.toLowerCase().replace(/ /g, '-').replace(/:/g, '')}`);
    }
    else if (title === 'Dragon Ball Z Kai') {
        window.open(`https://www3.animeflv.net/anime/${title.toLowerCase().replace(/ /g, '-').replace(/:/g, '').replace(/-z/g, '')}`);
    }
    else{
        window.open(`https://www3.animeflv.net/anime/${title.toLowerCase().replace(/ /g, '-').replace(/:/g, '')}`);
    }
})