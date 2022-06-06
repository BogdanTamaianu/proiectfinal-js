// cream un obiect global, numit APP
window.APP = {};
// index.js fiind primul fisier care se incarca, mainPage va fi available in toate celelalte fisiere
window.mainPage = document.querySelector('.movies-list');
// tot in APP cream un vector de obiecte, numit products

APP.movies = [
	{
		// un film are urmatoarele detalii
		name: 'The Dark Knight',
		description: 'Action',
		an: 2008,
		data: new Date('2021-04-21'),
		poza: new Image("https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"),
		rating: 9.0,		
	}
	,
	{
		name: 'Pulp Fiction',
		description: 'Drama',
		an: 1994,
		data: new Date('2021-05-22'),
		poza: new Image("https://static.posters.cz/image/750/postere/pulp-fiction-cover-i1288.jpg"),
		rating: 8.9
	}
	,
	{
		name: 'Fight Club',
		description: 'Drama',
		an: 1999,
		data: new Date('2021-06-15'),
		poza: new Image("https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"),
		rating: 8.8
	}
];

// TODO: Store products in localStorage#
const stringMovies = JSON.stringify(APP.movies);
localStorage.setItem("movie", stringMovies);

const returnedMovies = localStorage.getItem("movie");
console.log(JSON.parse(returnedMovies));

function startRendering() {
	// "randam" lista de filme, trimitand ca parametru APP.movies (incarcat mai sus)
	APP.renderMoviesList(APP.movies);
}
// DUPA ce s-au incarcat TOATE scripturile, apelam functia startRendering
// facem asta pentru ca la momentul incarcarii lui index.js, nu stim cine renderProductList()
window.addEventListener('load', startRendering);
