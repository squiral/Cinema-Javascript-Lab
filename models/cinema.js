const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function() {
  const result = this.films.map((film) => {
    return film.title
  } )
  return result
}

Cinema.prototype.findFilmByTitle = function(title) {
  const result = this.films.filter((film) => {
    return film.title === title
  })
  return result[0]
}

Cinema.prototype.filterByGenre = function(genre) {
  const result = this.films.filter((film) => {
    return film.genre === genre
  })
  return result
}

module.exports = Cinema;
