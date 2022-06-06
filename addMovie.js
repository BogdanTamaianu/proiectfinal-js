mainPage.innerHTML += `
<div class="sortare">
<button onclick="sortareNume()">Sortare dupa Nume</button>
<button onclick="sortareAn()">Sortare dupa an</button>
<button onclick="sortareData()">Sortare dupa data</button>
<button onclick="sortareRating()">Sortare dupa rating</button>
<button onclick="listtotable()">Schimba aspectul</button>
</div>
  <div class="fsf", id="movie">
  <form class="formular" id="add-movie">
    <label>Nume:</label>
    <input id="form" type="text" name="movieName"/>
    <label>Descriere:</label>
    <input id="form" type="text" name="movieDescription"/>
    <label>An aparitie:</label>
    <input id="form" type="number" name="anAparitie"/>
    <label>Data Adaugare:</label>
    <input id="form" type="date" name="dataAdaugare"/>
    <label>Poza Film:</label>
    <input id="form" type="url" name="pozaFilm"/>
    <label>Rating:</label>
    <input id="form" type="number" name="ratingFilm"/>
    <input id="form" type="submit" />
  </form>
  </div>
  `

function addFormFunctionality() {
  const form = document.querySelector('#add-movie');
  // echivalentul lui form.addEventListener('submit', function...)
  // functia se va executa la submiterea formularului
  form.onsubmit = function(event) {
    // prevenim comportamentul default de la submit (reincarcarea paginii)
    event.preventDefault();
    // targetul este elementul de HTML care a declansat evenimentul (formularul)
    // din formular extragem valorile campurilor care ne intereseaza
    const movieName = event.target.movieName.value;
    const movieDescription = event.target.phonePrice.value;
    const anAparitie = Number(event.target.anAparitie.value);
    const dataAdaugare = Date(event.target.dataAdaugare.value);
    const pozaFilm = Image(event.target.pozaFilm.value);
    const ratingFilm = Number(event.target.ratingFilm.value);
    const acttime = Date(Date.now()-dataAdaugare);
    // cream un nou obiect si il introducem in vectorul de filme
    const newMovie = {
      name: movieName,
      description: movieDescription,
      an: anAparitie,
      data: dataAdaugare,
      poza: pozaFilm,
      rating: ratingFilm,
      acttime: acttime
    };
    APP.movies.push(newMovie);
    // ATENTIE! Pentru a vedea modificarile, trebuie sa reapelam functia de afisare a filmelor
    APP.renderMoviesList(APP.movies);
  }
}
// intreaga functionalitate a formularului e adaugata dupa ce se incarca pagina
// pentru a fi siguri ca avem DOM-ul populat (cu innerHTML introducem in DOM)
// si pentru a putea folosi functiile definite in alte fisiere .js
window.addEventListener('load', addFormFunctionality);
