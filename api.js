const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODM0MWUyNTQ3YTlhYTQwZTliZDRiYTQ0OTdhZTdkMiIsIm5iZiI6MTcyOTA0OTUxMy42MTY2MDIsInN1YiI6IjY3MGYxMzVmNTQ3ZGU0YTc0ZjYwYjIyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.45G1EV6KJv89GwR2dG-oknvXwfxE_OyjqzsLt-QOLPw'
    }
};

async function fetchMovies() {
// async / await 이용해서 비동기작업 await 뒤에꺼 완료될 때 까지 기다림
// fetchMovies 내보낼 수 있게 함수처리
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options);
        if (!response.ok) throw new Error('데이터 가져오기 오류다 오류!');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('오류! 오류!! :', error);
    }
}

export {fetchMovies};