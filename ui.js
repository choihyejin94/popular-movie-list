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
    const allfile = document.querySelector(".moviecards");
    const onefile = document.createElement("div");
    onefile.classList.add("modalcardfile");
    allfile.appendChild(onefile);

    const modalBackground = document.createElement("div");
    modalBackground.classList.add("modal-background");
    document.body.appendChild(modalBackground);

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
// 다른 모듈에서 사용할 수 있도록 내보내기