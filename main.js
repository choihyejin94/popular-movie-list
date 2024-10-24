import { fetchMovies } from './api.js';
import { MainMovies, setupModal } from './ui.js';
import { setupSearch } from './search.js';

const reloadbtn = document.querySelector(".reload");
reloadbtn.addEventListener("click", function () {
    location.reload();
});

async function init() {
    const movies = await fetchMovies();
    MainMovies(movies);
    setupModal(movies);
    setupSearch();
}

document.addEventListener('DOMContentLoaded', init);
// 돔트리 분석 끝나면 init 함수 호출