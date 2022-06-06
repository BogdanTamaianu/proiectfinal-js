const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const dataAdaugare = new Date();

let acttime = function(today, dataAdaugare) {
dt1 = new Date(today);
dt2 = new Date(dataAdaugare);
return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}
APP.movies.forEach((elem) => {
    updated = new Movie(elem.name, elem.description, elem.an, elem.data, elem.poza, elem.rating, elem.acttime);
    updated.renderMovie();
    APP.renderMoviesList(APP.movies);
});

console.log(today, dataAdaugare);
window.addEventListener('load', acttime);
