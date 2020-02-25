const keyApi= 'ce62b7f668a97b07e6d58a85df75641b';
const region = 'AR';
const page = 1;

const popularMovie = async () =>{
    const urlApiPopular= `https://api.themoviedb.org/3/movie/popular?api_key=${keyApi}&page=${page}&region=${region}`;
    const response = await fetch(urlApiPopular);
    const data = await response.json();
    return data;

} 

const getPopularMovie = async () =>{
    const movie = JSON.parse(localStorage.getItem('popular'));
    console.log(movie);
    return await  movie;

}



const nowPlayingMovies = async () =>{
    const urlApiNowPlaying= `https://api.themoviedb.org/3/movie/now_playing?api_key=${keyApi}&page=${page}&region=${region}`;
    const response = await fetch(urlApiNowPlaying);
    const data = await response.json();
    return data;
}

const upComingMovies = async () =>{
    const urlApiUpComing= `https://api.themoviedb.org/3/movie/upcoming?api_key=${keyApi}&page=${page}&region=${region}`;
    const response = await fetch(urlApiUpComing);
    const data = await response.json();
    return data;
} 
const getMovieForId = async (id)=>{    
    const urlFindId= `https://api.themoviedb.org/3/movie/${id}?api_key=ce62b7f668a97b07e6d58a85df75641b&language=es-ES`
    const response = await fetch(urlFindId);
    const data =await response.json();
    return data;
}

const getMovieForNme = async (nameMovie)=>{
    const urlApiUpComing= `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${nameMovie}&page=${page}&region=${region}&include_adult=false&language=es-ES`;
    const response = await fetch(urlApiUpComing);
    const data =await response.json();
    return data.results;
}

export default {
    popularMovie, getPopularMovie,nowPlayingMovies, upComingMovies, getMovieForNme, getMovieForId
} 
