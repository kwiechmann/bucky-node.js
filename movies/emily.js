var movies = require('./movies');

var emilysMovies = movies ();
emilysMovies.favMovie = 'Wuthering Heights';
console.log("Emily's favorite movie is: " + emilysMovies.favMovie);