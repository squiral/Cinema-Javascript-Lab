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

Cinema.prototype.filterByYear = function(year) {
  const result = this.films.filter((film) => {
    return film.year === year
  })
  return result
}

Cinema.prototype.areThereFilmsFromYear = function(year) {
  const result = this.films.some((film) => {
    return film.year === year
  })
  return result
}
Cinema.prototype.allFilmsOverLength = function(length) {
  const result = this.films.every((film) => {
    return film.length > length
  })
  return result
}

Cinema.prototype.totalRunningTimeOfAllFilms = function() {
  const filmLengths = this.films.map((film) => {
    return film.length
  })
  const result = filmLengths.reduce((runningTotal, initialValue) => {
    return runningTotal + initialValue
  })
  return result
}

Cinema.prototype.filterByProperty = function(property, value) {
  const result = this.films.filter((film) => {
    return film[property] === value
  })
  return result
}

module.exports = Cinema;
