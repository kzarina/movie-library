var searchBar = document.getElementById("searchBar");
var searchBtn = document.getElementById("searchBtn");
var movieList = document.getElementById("movieList");
var searchTerm = null;

searchBar.addEventListener("keyup", function (event) {
  searchTerm = event.target.value;
  console.log(searchTerm);
});

searchBtn.addEventListener("click", function () {
  console.log("click");
  findMovies(searchTerm);
});

function findMovies() {
  fetch("https://www.omdbapi.com/?t=avengers&page=1&apikey=a39e973a")
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      console.log(data);
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
findMovies();

// http://www.omdbapi.com/?i=tt3896198&apikey=a39e973a
// var html = `<div class="movieCard">
//       <div>
//         <img src="${data.Poster}"/>
//       </div>
//       <div>
//         <p><b>Title:</b> ${data.Title}</p>
//         <p><b>Released:</b> ${data.Released}</p>
//         <p><b>Country:</b> ${data.Country}</p>
//         <p><b>Genre:</b> ${data.Genre}</p>
//         <p><b>Actors:</b> ${data.Actors}</p>
//         <p><b>Plot:</b> ${data.Plot}</p>
//         <p><b>Awards:</b> ${data.Awards}</p>
//       </div>
//   </div>`;
// container.innerHTML += html;
