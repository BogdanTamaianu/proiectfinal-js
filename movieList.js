// adaugam lista de produse in html
mainPage.innerHTML += `
	<h2>Lista filme:</h2>
	<div id="movies-list">
	</div>
`;

APP.renderMoviesList = (movieArray) => {
	// golim lista in care se vor afisa filmele
	const moviesList = document.querySelector('#movies-list');
	moviesList.innerHTML = '';
	// pentru fiecare element din vectorul primit ca parametru
	movieArray.forEach( (elem) => {
		// cream un produs
		movie = new Movie(elem.name, elem.description, elem.an, elem.data, elem.poza, elem.rating, elem.acttime);
		// il afisam in pagina web
		movie.renderMovie();
	});
}
