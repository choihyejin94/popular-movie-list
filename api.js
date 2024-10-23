const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODM0MWUyNTQ3YTlhYTQwZTliZDRiYTQ0OTdhZTdkMiIsIm5iZiI6MTcyOTA0OTUxMy42MTY2MDIsInN1YiI6IjY3MGYxMzVmNTQ3ZGU0YTc0ZjYwYjIyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.45G1EV6KJv89GwR2dG-oknvXwfxE_OyjqzsLt-QOLPw'
    }
};

async function fetchMovies() {
// async / await 이용해서 비동기작업 완료될 때 까지 기다림
// fetchMovies 내보낼 수 있게 함수처리
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options);
        if (!response.ok) throw new Error('네트워크 응답이 좋지 않습니다.');
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error('영화 데이터를 가져오는 중 오류 발생:', error);
        return [];
    }
}

export {fetchMovies};
// fetchMovies를 다른 모듈에서 사용할 수 있도록 내보내는 것