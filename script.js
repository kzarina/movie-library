var searchBar = document.getElementById("searchBar");
var searchBtn = document.getElementById("searchBtn");
var movieList = document.getElementById("movieList");
var searchTerm = null;

searchBar.addEventListener("keyup", function (event) {
  searchTerm = event.target.value.trim();
});

searchBtn.addEventListener("click", function () {
  movieList.innerHTML = "";
  findMovies(searchTerm);
  searchBar.value = "";
});

function findMovies(searchTerm) {
  fetch(`https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=a39e973a`)
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      var movies = data.Search;
      for (var movie of movies) {
        var html = `<div class="movieInfo">
        <img src="${movie.Poster}" alt="" />
        <h3 class="movieName">${movie.Title}</h3>
        <p><b>Year:</b> ${movie.Year}</p>
        <p><b>Type:</b> ${movie.Type}</p>
        </div>`;
        movieList.innerHTML += html;
      }
    });
}
