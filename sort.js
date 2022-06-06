function sortareAn() {
APP.movies.sort((a, b) => {
     return a.an - b.an;
});

APP.movies.forEach((elem) => {
    sorted = new Movie(elem.name, elem.description, elem.an, elem.data, elem.poza, elem.rating);
    sorted.renderMovie();
    APP.renderMoviesList(APP.movies);
});
}
window.addEventListener('onclick', sortareAn);

function sortareData() {
APP.movies.sort((a, b) => {
     return a.data - b.data;
});

APP.movies.forEach((elem) => {
    sorted = new Movie(elem.name, elem.description, elem.an, elem.data, elem.poza, elem.rating);
    sorted.renderMovie();
    APP.renderMoviesList(APP.movies);
});
}
window.addEventListener('onclick', sortareData);

function sortareNume() {
APP.movies.sort((a, b) => {
  if(a.name < b.name) { return -1; }
  if(a.name > b.name) { return 1; }
  return 0;
});

APP.movies.forEach((elem) => {
    sorted = new Movie(elem.name, elem.description, elem.an, elem.data, elem.poza, elem.rating);
    sorted.renderMovie();
    APP.renderMoviesList(APP.movies);
});
}
window.addEventListener('onclick', sortareNume);

function sortareRating() {
APP.movies.sort((a, b) => {
     return a.rating - b.rating;
});

APP.movies.forEach((elem) => {
    sorted = new Movie(elem.name, elem.description, elem.an, elem.data, elem.poza, elem.rating);
    sorted.renderMovie();
    APP.renderMoviesList(APP.movies);
});
}
window.addEventListener('onclick', sortareRating);
