// main.js
import { fetchMovies } from './api.js';
import { renderMovies, setupModal, setupSearch } from './ui.js';

const reloadbtn = document.querySelector(".reload");
reloadbtn.addEventListener("click", function () {
    location.reload();
});

async function init() {
    const movies = await fetchMovies();
    renderMovies(movies);
    setupModal(movies);
    setupSearch();
}

document.addEventListener('DOMContentLoaded', init);
