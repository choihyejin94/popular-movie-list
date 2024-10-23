// ui.js
function renderMovies(movies) {
    let temp_html = "";
    movies.forEach(element => {
        const myImg = element['poster_path'];
        const myTitle = element['title'];
        const myAver = element['vote_average'];

        temp_html += `
            <div class="onecard" data-title="${myTitle.toUpperCase()}">
                <img src="https://image.tmdb.org/t/p/w500${myImg}" alt="${myTitle}이미지">
                <h2>${myTitle}</h2>
                <p>평점: ${myAver}</p>
            </div>
        `;
    });
    document.querySelector(".mycards").innerHTML = temp_html;
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
            const myImg = element['poster_path'];
            const myTitle = element['title'];
            const myText = element['overview'];
            const myDate = element['release_date'];
            const myAver = element['vote_average'];

            onefile.innerHTML = `
                <div class="modalcard">
                    <div class="modalBtn">
                        <button class="close-modal">닫기</button>
                    </div>  
                    <img src="https://image.tmdb.org/t/p/w500${myImg}" alt="${myTitle}이미지">
                    <h2>${myTitle}</h2>
                    <p>${myText}</p>
                    <p>개봉일: ${myDate}</p>
                    <p>평점: ${myAver}</p>
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

function setupSearch() {
    const inputbtn = document.querySelector(".putbtn");
    const inputtext = document.querySelector("#searchmovie");
    const form1 = document.querySelector(".searchform");

    function filterMovies() {
        const movieFilter = inputtext.value.toUpperCase();
        const movieCards = document.querySelectorAll('.onecard');

        movieCards.forEach(card => {
            const title = card.getAttribute('data-title');
            card.style.display = title.includes(movieFilter) ? '' : 'none';
        });
    }

    inputbtn.addEventListener("click", function (event) {
        event.preventDefault();
        filterMovies();
    });

    form1.addEventListener("submit", function (event) {
        event.preventDefault();
        filterMovies();
    });

    inputtext.addEventListener("input", filterMovies);
}

export { renderMovies, setupModal, setupSearch };
