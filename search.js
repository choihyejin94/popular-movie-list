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
// 버튼 클릭시 검색
    inputbtn.addEventListener("click", function (event) {
        event.preventDefault();
        filterMovies();
    });

// 엔터로 검색
    form1.addEventListener("submit", function (event) {
        event.preventDefault();
        filterMovies();
    });

// 인풋에 글자 검색
    inputtext.addEventListener("input", filterMovies);
}

export { setupSearch };