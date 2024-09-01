const containerFilmes = document.getElementById("container")


const moviesVariable = (items) => {
    containerFilmes.innerHTML = items.map((item) => {
        let { original_title, title } = item;
        return `
            <div class="movie">
                <img src="https://image.tmdb.org/t/p/original${item.poster_path}" alt="${item.title}">
            </div>
            `;
    }).join("");
};




fetch('https://api.themoviedb.org/3/discover/movie?api_key=dc624ca1500425f63c30a8513c085deb')
    .then(response => response.json())
    .then(data => {

        const movies = data.results;

        moviesVariable(movies);

        document.getElementById("searchInput").addEventListener("input", (event) => {
            const input = event.target.value.toLowerCase()
            const filterMovies = movies.filter((item) => {
                return (
                    item.original_title.toLowerCase().includes(input)
                )
            }); moviesVariable(filterMovies)
        })


        

    })
    .catch(error => {
        console.log(error);
    });
