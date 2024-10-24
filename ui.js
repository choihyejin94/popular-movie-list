function MainMovies(movies) {
    movies.forEach((movie) => {
    document.querySelector(".mycards").innerHTML += `
            <div class="onecard" data-title="${movie.title.toUpperCase()}">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}이미지">
                <h2>${movie.title}</h2>
                <p>평점: ${movie.vote_average}</p>
            </div>`})
}

function setupModal(movies) {
    const onefile = document.querySelector(".onefile");
    const modalBackground = document.querySelector(".modalBackground")
    const movieCards = document.querySelectorAll(".onecard");
    movieCards.forEach((card, index) => {
        card.addEventListener("click", function () {
            onefile.style.display = "block";
            modalBackground.style.display = "block";

            const element = movies[index];

            onefile.innerHTML = `
                <div class="modalcard">
                    <div class="modalBtn">
                        <button class="close-modal">닫기</button></div>  
                    <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}이미지">
                    <h2>${element.title}</h2>
                    <p>${element.overview}</p>
                    <p>개봉일: ${element.release_date}</p>
                    <p>평점: ${element.vote_average}</p>
                </div>
            `;

            const closeModal = document.querySelector(".close-modal");
            closeModal.addEventListener("click", function () {
                onefile.style.display = 'none';
                modalBackground.style.display = "none";
            });
        });
    });
}

export { MainMovies, setupModal };