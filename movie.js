class Movie {
	// un produs este creat cu o clasa cu urmtorul constructor:
	constructor(name, description, an, data, poza, rating, acttime) {
		this.name = name;
		this.description = description;
		this.an = an;
		this.data = data;
		this.poza = poza;
		this.rating = rating;
		this.acttime = acttime;
	}
	// metoda renderMovie adauga filme in interiorul listei de filme
	renderMovie() {
		const moviesList = document.querySelector('#movies-list');
		moviesList.innerHTML += `
			<div class="column" id="movie">
			<ul class="row">
				<li class="list"><p>Nume: ${this.name}</p>
						<p>Descrption: ${this.description}</p>
						<p>An aparitie: ${this.an}</p>
						<p>Data adaugare: ${this.data}</p>
						<p>Rating: ${this.rating}</p>
						<div>${this.poza}<div>
						<div>${this.acttime}<div>
				</li>
				<ul>
			</div>
		`;
	}
}
