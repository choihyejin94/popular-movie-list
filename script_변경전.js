// 모듈화 하기 전 코드들.. 그동안의 노력들때모네 삭제 못하겠음.,
// const reloadbtn = document.querySelector(".reload");
// reloadbtn.addEventListener("click", function () {
//     location.reload();
// });

// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODM0MWUyNTQ3YTlhYTQwZTliZDRiYTQ0OTdhZTdkMiIsIm5iZiI6MTcyOTA0OTUxMy42MTY2MDIsInN1YiI6IjY3MGYxMzVmNTQ3ZGU0YTc0ZjYwYjIyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.45G1EV6KJv89GwR2dG-oknvXwfxE_OyjqzsLt-QOLPw'
//     }
// };

// // TMDB api 가져오기
// fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
//     .then(response => response.json())
//     .then(response => {
//         console.log(response);
//         let temp_html = "";

//         const rows = response['results'];

//         rows.forEach(element => {
//             const myImg = element['poster_path'];
//             const myTitle = element['title'];
//             const myAver = element['vote_average'];

//             // 카드 구현
//             temp_html += `
//                 <div class="onecard" data-title="${myTitle.toUpperCase()}">
//                     <img src="https://image.tmdb.org/t/p/w500${myImg}" alt="${myTitle}이미지">
//                     <h2>${myTitle}</h2>
//                     <p>평점: ${myAver}</p>
//                 </div>
//             `;
//         });

//         document.querySelector(".mycards").innerHTML = temp_html;

//         // 모달가져오기
//         const allfile = document.querySelector(".moviecards");
//         const onefile = document.createElement("div");
//         onefile.classList.add("modalcardfile");
//         allfile.appendChild(onefile);

//         // 모달 백그라운드 생성
//         const modalBackground = document.createElement("div");
//         modalBackground.classList.add("modal-background");
//         document.body.appendChild(modalBackground);

//         // 모달 내용값 가져오기
//         const movieCards = document.querySelectorAll(".onecard");
//         movieCards.forEach((card, index) => {
//             card.addEventListener("click", function () {
//                 onefile.style.display = "block";
//                 modalBackground.style.display = "block";

//                 const element = rows[index];
//                 const myImg = element['poster_path'];
//                 const myTitle = element['title'];
//                 const myText = element['overview'];
//                 const myDate = element['release_date'];
//                 const myAver = element['vote_average'];

//                 // 모달 내용 설정
//                 onefile.innerHTML = `
//                     <div class="modalcard">
//                         <div class = "modalBtn">
//                         <button class="close-modal">닫기</button>
//                         </div>  
//                         <img src="https://image.tmdb.org/t/p/w500${myImg}" alt="${myTitle}이미지">
//                         <h2>${myTitle}</h2>
//                         <p>${myText}</p>
//                         <p>개봉일: ${myDate}</p>
//                         <p>평점: ${myAver}</p>
//                     </div>
//                 `;

//                 // 모달 닫기 버튼 이벤트 추가
//                 const closeModal = document.querySelector(".close-modal");
//                 closeModal.addEventListener("click", function () {
//                     onefile.style.display = 'none';
//                     modalBackground.style.display = "none";
//                 });
//             });
//         });

//         // 검색
//         const inputbtn = document.querySelector(".putbtn");
//         const inputtext = document.querySelector("#searchmovie");
//         const form1 = document.querySelector(".searchform");

//         function filterMovies() {
//             const movieFilter = inputtext.value.toUpperCase();
//             const movieCards = document.querySelectorAll('.onecard');

//             movieCards.forEach(card => {
//                 const title = card.getAttribute('data-title');
//                 if (title.includes(movieFilter)) {
//                     card.style.display = '';
//                 } else {
//                     card.style.display = 'none';
//                 }
//             });
//         }
//         // 버튼 클릭해서 검색
//         inputbtn.addEventListener("click", function (event) {
//             event.preventDefault();
//             filterMovies();
//         });
//         // 엔터로 검색
//         form1.addEventListener("submit", function (event) {
//             event.preventDefault();
//             filterMovies();
//         });
//         // 실시간 검색
//         inputtext.addEventListener("input", filterMovies);
//     })
//     .catch(err => console.error(err));
